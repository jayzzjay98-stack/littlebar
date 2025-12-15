"use client";

import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

const useMedia = (queries: string[], values: number[], defaultValue: number): number => {
    const get = () => {
        if (typeof window === 'undefined') return defaultValue;
        return values[queries.findIndex(q => window.matchMedia(q).matches)] ?? defaultValue;
    };

    const [value, setValue] = useState<number>(defaultValue);

    useEffect(() => {
        setValue(get());
        const handler = () => setValue(get());
        queries.forEach(q => window.matchMedia(q).addEventListener('change', handler));
        return () => queries.forEach(q => window.matchMedia(q).removeEventListener('change', handler));
    }, [queries]);

    return value;
};

const useMeasure = <T extends HTMLElement>() => {
    const ref = useRef<T | null>(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        if (!ref.current) return;
        const ro = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            setSize({ width, height });
        });
        ro.observe(ref.current);
        return () => ro.disconnect();
    }, []);

    return [ref, size] as const;
};

interface ImageDimension {
    src: string;
    width: number;
    height: number;
}

const preloadImagesWithDimensions = async (urls: string[]): Promise<ImageDimension[]> => {
    return Promise.all(
        urls.map(
            src =>
                new Promise<ImageDimension>(resolve => {
                    const img = new Image();
                    img.src = src;
                    img.onload = () => resolve({ src, width: img.naturalWidth, height: img.naturalHeight });
                    img.onerror = () => resolve({ src, width: 1, height: 1 });
                })
        )
    );
};

interface Item {
    id: string;
    img: string;
    url: string;
    height: number;
}

interface GridItem extends Item {
    x: number;
    y: number;
    w: number;
    h: number;
}

interface MasonryProps {
    items: Item[];
    ease?: string;
    duration?: number;
    stagger?: number;
    animateFrom?: 'bottom' | 'top' | 'left' | 'right' | 'center' | 'random';
    scaleOnHover?: boolean;
    hoverScale?: number;
    blurToFocus?: boolean;
    colorShiftOnHover?: boolean;
}

const Masonry: React.FC<MasonryProps> = ({
    items,
    ease = 'power3.out',
    duration = 0.6,
    stagger = 0.05,
    animateFrom = 'bottom',
    scaleOnHover = true,
    hoverScale = 0.95,
    blurToFocus = true,
    colorShiftOnHover = false
}) => {
    const columns = useMedia(
        ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'],
        [8, 6, 4, 3],
        2
    );

    const [containerRef, { width }] = useMeasure<HTMLDivElement>();
    const [imagesReady, setImagesReady] = useState(false);
    const [imageDimensions, setImageDimensions] = useState<Map<string, ImageDimension>>(new Map());

    const getInitialPosition = (item: GridItem) => {
        const containerRect = containerRef.current?.getBoundingClientRect();
        if (!containerRect) return { x: item.x, y: item.y };

        let direction = animateFrom;
        if (animateFrom === 'random') {
            const dirs = ['top', 'bottom', 'left', 'right'];
            direction = dirs[Math.floor(Math.random() * dirs.length)] as typeof animateFrom;
        }

        switch (direction) {
            case 'top':
                return { x: item.x, y: -200 };
            case 'bottom':
                return { x: item.x, y: window.innerHeight + 200 };
            case 'left':
                return { x: -200, y: item.y };
            case 'right':
                return { x: window.innerWidth + 200, y: item.y };
            case 'center':
                return {
                    x: containerRect.width / 2 - item.w / 2,
                    y: containerRect.height / 2 - item.h / 2
                };
            default:
                return { x: item.x, y: item.y + 100 };
        }
    };

    useEffect(() => {
        preloadImagesWithDimensions(items.map(i => i.img)).then((dims) => {
            const dimMap = new Map<string, ImageDimension>();
            dims.forEach(d => dimMap.set(d.src, d));
            setImageDimensions(dimMap);
            setImagesReady(true);
        });
    }, [items]);

    const grid = useMemo<GridItem[]>(() => {
        if (!width || imageDimensions.size === 0) return [];
        const colHeights = new Array(columns).fill(0);
        const gap = 16;
        const totalGaps = (columns - 1) * gap;
        const columnWidth = (width - totalGaps) / columns;

        return items.map(child => {
            const col = colHeights.indexOf(Math.min(...colHeights));
            const x = col * (columnWidth + gap);

            // Get actual image dimensions
            const dim = imageDimensions.get(child.img);
            const aspectRatio = dim ? dim.width / dim.height : 1;

            // Calculate height based on actual aspect ratio
            const height = columnWidth / aspectRatio;
            const y = colHeights[col];

            colHeights[col] += height + gap;
            return { ...child, x, y, w: columnWidth, h: height };
        });
    }, [columns, items, width, imageDimensions]);

    const hasMounted = useRef(false);

    useLayoutEffect(() => {
        if (!imagesReady) return;

        grid.forEach((item, index) => {
            const selector = `[data-key="${item.id}"]`;
            const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };

            if (!hasMounted.current) {
                const start = getInitialPosition(item);
                gsap.fromTo(
                    selector,
                    {
                        opacity: 0,
                        x: start.x,
                        y: start.y,
                        width: item.w,
                        height: item.h,
                        ...(blurToFocus && { filter: 'blur(10px)' })
                    },
                    {
                        opacity: 1,
                        ...animProps,
                        ...(blurToFocus && { filter: 'blur(0px)' }),
                        duration: 0.8,
                        ease: 'power3.out',
                        delay: index * stagger
                    }
                );
            } else {
                gsap.to(selector, {
                    ...animProps,
                    duration,
                    ease,
                    overwrite: 'auto'
                });
            }
        });

        hasMounted.current = true;
    }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

    const handleMouseEnter = (id: string, element: HTMLElement) => {
        if (scaleOnHover) {
            gsap.to(`[data-key="${id}"]`, {
                scale: hoverScale,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
        if (colorShiftOnHover) {
            const overlay = element.querySelector('.color-overlay') as HTMLElement;
            if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
        }
    };

    const handleMouseLeave = (id: string, element: HTMLElement) => {
        if (scaleOnHover) {
            gsap.to(`[data-key="${id}"]`, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
        if (colorShiftOnHover) {
            const overlay = element.querySelector('.color-overlay') as HTMLElement;
            if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
        }
    };

    return (
        <div ref={containerRef} className="relative w-full h-full">
            {grid.map(item => (
                <div
                    key={item.id}
                    data-key={item.id}
                    className="absolute box-content cursor-pointer"
                    style={{ willChange: 'transform, width, height, opacity' }}
                    onClick={() => window.open(item.url, '_blank', 'noopener')}
                    onMouseEnter={e => handleMouseEnter(item.id, e.currentTarget)}
                    onMouseLeave={e => handleMouseLeave(item.id, e.currentTarget)}
                >
                    <div
                        className="relative w-full h-full rounded-xl overflow-hidden"
                        style={{
                            padding: '3px',
                            background: 'linear-gradient(135deg, #D4AF37 0%, #8B6914 25%, #D4AF37 50%, #F5D77A 75%, #D4AF37 100%)',
                            boxShadow: '0 10px 40px -10px rgba(212, 175, 55, 0.4)',
                        }}
                    >
                        <div className="w-full h-full rounded-lg overflow-hidden bg-black">
                            <img
                                src={item.img}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {colorShiftOnHover && (
                            <div className="color-overlay absolute inset-0 rounded-xl bg-gradient-to-tr from-[#D4AF37]/30 to-amber-500/30 opacity-0 pointer-events-none" />
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Masonry;
