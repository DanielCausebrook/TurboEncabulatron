import defaultConfig from './default-config.js';
declare const TurboEncabulatron: import("svelte").Component<{
    config?: typeof defaultConfig;
    animationDelayMs?: number;
    generationDelayMs?: number;
}, {}, "">;
type TurboEncabulatron = ReturnType<typeof TurboEncabulatron>;
export default TurboEncabulatron;
