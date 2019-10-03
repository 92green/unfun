//@flow
import * as method from '../string';
import * as standard from '../string';

// Methods
test.each([
    ['charAt', 1, 'foo', 'o'],
    ['charCodeAt', 1, 'foo', 111],
    ['codePointAt', 0, 'f', 102],
    ['concat', 'foo', 'bar', 'barfoo'],
    ['endsWith', 'o', 'foo', true],
    ['includes', 'foo', 'foobar', true],
    ['indexOf', 'o', 'foo', 1],
    ['lastIndexOf', 'o', 'fool', 2],
    ['localeCompare', 'bar', 'foo', 1],
    ['normalize', 'NFKC', '\u1E9B\u0323', '\u1E69'],
    ['padEnd', [6, '.'], 'foo', 'foo...'],
    ['padStart', [6, '.'], 'foo', '...foo'],
    ['repeat', 10, 'x', 'xxxxxxxxxx'],
    ['replace', ['foo', 'bar'], '--foo--', '--bar--'],
    ['search', 'foo', '--foo--', 2],
    ['slice', [1,4], 'radical', 'adi'],
    ['split', '.', 'a.b.c.d.e', ['a', 'b', 'c', 'd', 'e']],
    ['substring', [4, 6], 'foobarbaz', 'ar'],
    ['startsWith', 'foo bar', 'foo bar baz', true],
    ['toString', , new String('foo'), 'foo'],
    ['valueOf', , new String('foo'), 'foo'],
    ['trim', , ' foo ', 'foo'],
    ['trimLeft', , ' foo', 'foo'],
    ['trimRight', , 'foo ', 'foo'],
    ['toLocaleLowerCase', , 'GESÄSS', 'gesäss'],
    ['toLocaleUpperCase', , 'Gesäß', 'GESÄSS'],
    ['toLowerCase', , 'FOO', 'foo'],
    ['toUpperCase', , 'foo', 'FOO'],
])(
    '%s(%p)(%p) === %p',
    (name, bb, aa, expected) => {
        const first = Array.isArray(bb)
            ? method[name](...bb)
            : method[name](bb)
        ;

        expect(first(aa)).toEqual(expected);
    }
);

test('match', () => {
    expect(method.match(/foo(bar)/)('foobar')[1]).toBe('bar');
});

// Standard
test.each([
    ['fromCharCode', 65, , 'A'],
    ['fromCodePoint', 194564, , '你']
])(
    'String.%s()',
    (name, aa, bb, expected) => {
        expect(standard[name](bb)(aa)).toBe(expected);
    }
);

