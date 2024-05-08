import { computedRef, computed } from "vue";

/** */
export const useComputedFn = <T>(fn: (...args: unknown[]) => T): ((...args: unknown[]) => computedRef<T>) => {
    const cache: Map<string, computedRef<T>> = new Map();

    return (...args: unknown[]) => {
        const cacheKey = JSON.stringify(args);
        if (cache.has(cacheKey))
            return cache.get(cacheKey) as computedRef<T>;

        const result = computed(() => fn(...args));
        cache.set(cacheKey, result);
        return result;
    }
};