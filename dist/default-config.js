export default { type: "replace", data: {
        source: { type: "join", data: [
                { type: "random", data: [
                        '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                        'turbo-', 'hyper-', 'meta-', 'double-', 'reverse-', 'electric ', 'hydraulic ', 'manual ',
                        'turbo-', 'hyper-', 'meta-', 'double-', 'reverse-', 'electric ', 'hydraulic ', 'manual ',
                        'quantum '
                    ] },
                { type: 'random', data: [
                        '', '', '', '', '', '', '', '', '', '',
                        're', 'un', 'de', 'retro', 'super', 'sub', 'con', 'circum', 'auto', 'contra',
                        'trans', 'dis', 'exo', /*'extra', */ 'inter',
                    ] },
                '|',
                { type: 'random', data: [
                        '', '', '', '', '', '', '',
                        'en',
                    ] },
                '|',
                { type: 'random', data: [
                        // '~' After a vowel signifies it has to be a long vowel.
                        'baffl', 'bant', 'bash', 'beam', 'bee~p', 'bi~nd', 'blast', 'blip', 'bonk', 'bug', 'buzz', 'burn', 'bust', 'cab', 'crank', 'crack', 'crash',
                        'disc', 'dri~v', 'duc', 'duck', 'fab', 'gram', 'mo~t', 'nai~l', 'lash', 'loca~t', 'pact', 'pi~l', 'puck', 'quack',
                        'rot', 'rust', 'scan', 'shred', 'sink', 'skel', 'skim', 'tank', 'tack', 'tact', 'tract', 'turb',
                        'volt', 'warp', 'whack', 'wham', 'whizz', 'wrangl', 'zap', 'zing',
                    ] },
                '&',
                { type: 'random', data: [
                        'er',
                        'er', 'tor', 'ler', 'ifier', 'tron',
                        'er', 'tor', 'ler', 'ifier', 'tron',
                        'or', 'on', 'ter', 'ton', 'lon', 'lor', 'meter', 'matic',
                        // 'iser',
                    ] },
                '#',
                { type: 'random', data: [
                        '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                        '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
                        ' 3000', ' 5000'
                    ] },
            ] },
        replacements: [
            // Suffix boundary
            ['([^aeiou])([a-zA-Z])&\\2+', '$1$2&'], // De-double letters on suffix boundary
            ['([^lm])&\\1+', '$1&'], // De-double letters on suffix boundary
            // Word end
            ['([^aeiouy][blmpt]|[dvz])&(t[oe]r#)', { type: 'random', data: [
                        '$1&a$2', '$1&o$2', '$1&i$2', '$1&u$2'
                    ] }],
            ['([^aeiouy][bmpt]|[vz])&(l[oe][rnt]#)', { type: 'random', data: [
                        '$1&a$2', '$1&o$2', '$1&i$2', '$1&u$2'
                    ] }],
            ['([^l][^aeioy])&meter#', '$1&ometer#'],
            ['scer#', 'cer#'],
            ['(d|fl|gl|ct|rk|m|v|z)&(tron#|matic#)', { type: 'random', data: [
                        '$1&a$2', '$1&o$2'
                    ] }],
            ['([^aeiou][aei])([mnpbdlz])&(l?[aeiou])', '$1$2$2&$3'], // Double some consonants
            ['([^aeiou][aeiou])([g])&(l?[eo])', '$1$2$2&$3'], // Double some consonants
            // ['([^aeiou][aei])([mnpbdlz])(l?[aeiou](?:r|t|fier|tron|matic|meter)#)', '$1$2$2$3'], // Double some consonants
            // ['([^aeiou][aeiou])([g])(l?[eo][rt]#)', '$1$2$2$3'], // Double some consonants
            ['&', ''], // Remove suffix boundary marker
            ['#', ''], // Remove word end marker
            // Prefixes
            ['\\|+', '|'],
            ['([aeiou])\\|en\\|', '$1|'], // Remove en if it would cause a hyphen (to minimise hyphens)
            // ['([^s])\\|\\1', '$1-$1'], // Hyphenate separated double letters
            ['([aeiou])\\|([aeiou])', '$1-$2'], // Hyphenate separated double vowels
            ['\\|', ''], // Remove prefix separators
            ['xz', 'xoz'],
            ['np', 'mp'],
            ['([a-zA-Z])\\1{2,}', '$1$1'], // De-triple all letters
            ['~', ''], // Remove long vowel signifier
            // No swears
            ['bugger', 'bungler'],
        ]
    } };
