export default { type: "chain", data: [
        { type: "random", data: [
                '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                'turbo-', 'hyper-', 'meta-', 'double-', 'reverse-', 'electric ', 'hydraulic ', 'manual ', 'rotary ', 'precision ',
                'turbo-', 'hyper-', 'meta-', 'double-', 'reverse-', 'electric ', 'hydraulic ', 'manual ', 'rotary ', 'precision ',
                'quantum ', 'laser ', 'safety ', 'high-voltage ', 'high-speed ', 'robotic ',
            ] },
        '|',
        { type: 'random', data: [
                '', '', '', '', '', '', '', '', '', '',
                're', 'un', 'de', 'retro', 'super', 'sub', 'con', 'circum', 'auto', 'contra',
                'trans', 'dis', 'exo', /*'extra', */ 'inter', 'mega', 'aero',
            ] },
        { type: 'random', data: [
                '', '', '', '', '', '', '',
                '|en',
            ] },
        '|', // Prefix separator
        { type: 'random', data: [
                // '~' After a vowel signifies it has to be a long vowel.
                'baffl', 'bant', 'bash', 'beam', 'bee~p', 'bi~nd', 'blast', 'blend', 'blip', 'bonk', 'bug', 'buzz', 'burn', 'bust', 'cab', 'clonk', 'crank', 'crack', 'crash',
                'disc', 'drill', 'dri~v', 'duct', 'duck', 'dunk', 'fab', 'frazzl', 'gram', 'mod', 'mo~t', 'nai~l', 'lash', 'loca~t', 'pact', 'press', 'puck', 'quack',
                'rust', 'scan', 'shred', 'sink', 'skelet', 'skim', 'slap', 'slam', 'swat', 'tank', 'tack', 'tact', 'track', 'tract', 'trash', 'turb',
                'volt', 'warp', 'whack', 'wham', 'whizz', 'woo~f', 'wrangl', 'zap', 'zing',
                // Rejects: 'du~c', 'pi~l', 'rot',
            ] },
        { type: 'random', data: [
                '', '', '', '', '', '', '', '', '', '', '',
                '&u~la~t', '&o'
            ] },
        '&', // Suffix boundary marker
        { type: 'random', data: [
                'er',
                'er', 'tor', 'ifier', 'tron',
                'er', 'tor', 'ifier', 'tron',
                'on', 'ter', 'ton', 'meter', 'matic',
                // Rejects: 'iser', 'ler', 'lon', 'lor', 'or'
            ] },
        '#', // Word end marker
        { type: 'random', data: [
                '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '', '', '',
                ' 3000', ' 5000', ' 8000', ' X', { type: 'random', data: [' MK1', ' MK2', ' MK3', ' MK4', ' MK5'] },
            ] },
        { type: "replace", data: [
                // Suffix boundary
                ['([^aeiou])([a-zA-Z])&\\2+', '$1$2&'], // De-double letters on suffix boundary
                ['([^lm])&\\1+', '$1&'], // De-double letters on suffix boundary
                ['([aeiouy]&)+([aeiouy])', '&$2'],
                ['\\|+', '|'],
                ['&&+', '&'],
                // Word end
                ['m&(t[eo][rn])(&|#)', 'mp&$1$2'],
                ['b&(t[eo][rn])(&|#)', 'p&$1$2'],
                ['g&(t[eo][rn])(&|#)', 'c&$1$2'],
                ['d&(t[eo][rn])(&|#)', {
                        type: 'random', data: [
                            'd&a&$1$2', 'd&i&$1$2', 'd&o&$1$2', 'd&u&$1$2',
                        ]
                    }],
                ['([^aeiouy][bmpt]|[vz])&(l[oe][rnt]#)', {
                        type: 'random', data: [
                            '$1&a&$2', '$1&o&$2', '$1&i&$2', '$1&u&$2'
                        ]
                    }],
                ['([^l][^aeioy])&meter#', '$1&ometer#'],
                ['scer#', 'cer#'],
                ['(d|[fgz]l|ct|rk|m|v|z)&(tron#|matic#)', {
                        type: 'random', data: [
                            '$1&a&$2', '$1&o&$2', '$1&o&$2',
                        ]
                    }],
                ['([~]t)&(matic#)', {
                        type: 'random', data: [
                            '$1&a$2', '$1&o$2', '$1&o$2',
                        ]
                    }],
                ['([^aeiou][aeiou])([bcdfghjklmnpqrstvwz])&(l?er|l?o[nr]|[aeiouy])(#|&)', '$1$2$2&$3$4'], // Double most consonants
                ['(vax|dox)&(l?er|l?o[nr]|[aeiouy])(#|&)', '$1x&$2$3'], // Double some x's
                ['&', ''], // Remove suffix boundary marker
                ['#', ''], // Remove word end marker
                // Prefixes
                ['([aeiouy]|er)\\|en\\|', '$1|'], // Remove en if it would cause a hyphen (to minimise hyphens)
                ['\\|(e|co)n\\|p', '|$1m|p'],
                ['x\\|?z', 'xoz'],
                // ['([^s])\\|\\1', '$1-$1'], // Hyphenate separated double letters
                ['([aeiouy])\\|([aeiouy])', '$1-$2'], // Hyphenate separated double vowels
                ['\\|', ''], // Remove prefix separators
                ['([a-zA-Z])\\1{2,}', '$1$1'], // De-triple all letters
                ['~', ''], // Remove long vowel signifier
                // No swears
                ['bugger', 'bungler'],
            ] },
        { type: 'capitalise' }
    ] };
