export default {type: "chain", data: [
    {type: "random", data: [
        '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
        'turbo-', 'hyper-', 'meta-', 'double-', 'reverse-', 'electric ', 'hydraulic ', 'manual ',
        'turbo-', 'hyper-', 'meta-', 'double-', 'reverse-', 'electric ', 'hydraulic ', 'manual ',
        'quantum '
    ]},
    {type: 'random', data: [
        '', '', '', '', '', '', '', '', '', '',
        're', 'un', 'de', 'retro', 'super', 'sub', 'con', 'circum', 'auto', 'contra',
        'trans', 'dis', 'exo', /*'extra', */'inter',
    ]},
    '|', // Prefix separator
    {type: 'random', data: [
        '', '', '', '', '', '', '',
        'en',
    ]},
    '|', // Prefix separator
    {type: 'random', data: [
        // '~' After a vowel signifies it has to be a long vowel.
        'baffl', 'bant', 'bash', 'beam', 'bee~p', 'bi~nd', 'blast', 'blip', 'bonk', 'bug', 'buzz', 'burn', 'bust', 'cab', 'crank', 'crack', 'crash',
        'disc', 'drill', 'dri~v', 'duc', 'duck', 'fab', 'frazzl', 'gram', 'mod', 'mo~t', 'nai~l', 'lash', 'loca~t', 'pact', 'pi~l', 'puck', 'quack',
        'rot', 'rust', 'scan', 'shred', 'sink', 'skelet', 'skim', 'tank', 'tack', 'tact', 'tract', 'trash', 'turb',
        'volt', 'warp', 'whack', 'wham', 'whizz', 'woo~f', 'wrangl', 'zap', 'zing',
    ]},
    {type: 'random', data: [
        '', '', '', '', '', '', '', '', '', '', '',
        '&u~la~t',
    ]},
    '&', // Suffix boundary marker
    {type: 'random', data: [
        'er',
        'er', 'tor', 'ifier', 'tron',
        'er', 'tor', 'ifier', 'tron',
        'on', 'ter', 'ton', 'meter', 'matic',
        // Rejects: 'iser', 'ler', 'lon', 'lor', 'or'
    ]},
    '#', // Word end marker
    {type: 'random', data: [
        '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
        ' 3000', ' 5000', ' 8000', ' X', {type: 'random', data:[' MK1', ' MK2',  ' MK3', ' MK4', ' MK5']},
    ]},
    {type: "replace", data: [
        // Suffix boundary
        ['([^aeiou])([a-zA-Z])&\\2+', '$1$2&'], // De-double letters on suffix boundary
        ['([^lm])&\\1+', '$1&'], // De-double letters on suffix boundary

        // Word end
        ['([^aeiouy][blmpt]|[dvz])&(t[oe][rn]#)', {
            type: 'random', data: [
                '$1&a$2', '$1&o$2', '$1&i$2', '$1&u$2'
            ]
        }],
        ['([^aeiouy][bmpt]|[vz])&(l[oe][rnt]#)', {
            type: 'random', data: [
                '$1&a$2', '$1&o$2', '$1&i$2', '$1&u$2'
            ]
        }],
        ['([^l][^aeioy])&meter#', '$1&ometer#'],
        ['scer#', 'cer#'],
        ['&(tron#|matic#)', { // Randomly prefix 'tron' or 'matic' with an 'o'
            type: 'random', data: [
                '&$1', '&$1', '&$1', '&$1', '&$1', '&$1', '&$1',
                '&o$1',
            ]
        }],
        ['(d|[fgz]l|ct|rk|m|v|z)&(tron#|matic#)', {
            type: 'random', data: [
                '$1&a$2', '$1&o$2', '$1&o$2',
            ]
        }],
        ['([~]t)&(matic#)', {
            type: 'random', data: [
                '$1&a$2', '$1&o$2', '$1&o$2',
            ]
        }],
        ['([^aeiou][aei])([mnpbdlz])&(l?[aeiou][^~])', '$1$2$2&$3'], // Double some consonants
        ['([^aeiou][aeiou])([g])&(l?[eo][^~])', '$1$2$2&$3'], // Double some consonants
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
    ]},
    {type: 'capitalise'}
]};