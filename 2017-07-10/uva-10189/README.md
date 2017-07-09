Minesweeper
===========

## Input

The input will consist of an arbitrary number of fields.
The first line of each field contains two integers `0 < n, m ≤ 100` which stands for the number of lines and columns of the field respectively.
The next `n` lines contains exactly `m` characters and represent the field.
Each safe square is represented by an `.` character and each mine square is represented by an `\*` character.
The first field line where `n = m = 0` represents the end of input and should not be processed.

## Output

For each field, you must print the following message in a line alone: `Field #x:`.
`x` stands for the number of the field (starting from 1).
The next `n` lines should contain the field with the `.` characters replaced by the number of adjacent mines to that square.
There must be an empty line between field outputs.
