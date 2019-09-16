#!/usr/bin/env python3

import io
from dateutil import parser
import asciidoc3.asciidoc3api as api
from bs4 import BeautifulSoup as Soup

adoc = api.AsciiDoc3API()


def parse(string):
    input = io.StringIO(string)
    output = io.StringIO()

    adoc.execute(input, output)

    soup = Soup(output.getvalue())

    [subtitle, date] = map(lambda x: x.text,
                           soup.select('#preamble .sectionbody .paragraph'))

    dt = parser.parse(date)

    return {'subtitle': subtitle, 'date': dt}


if __name__ == '__main__':
    string = '''
= Keyboard examples

[.subtitle]
Keyboard highlights

[.date]
Apr 26, 2019

|===
|Shortcut |Purpose

|kbd:[F11]
|Toggle fullscreen

|kbd:[Ctrl+T]
|Open a new tab

|kbd:[Ctrl+Shift+N]
|New incognito window

|kbd:[\ ]
|Used to escape characters

|kbd:[Ctrl+\]]
|Jump to keyword

|kbd:[Ctrl + +]
|Increase zoom
|===


== Menu stuff

To save the file, select menu:File[Save].

Select menu:View[Zoom > Reset] to reset the zoom level to the default setting.

== Button stuff

Press the btn:[OK] button when you are finished.

Select a file in the file navigator and click btn:[Open].

== Footnotes
A statement.footnote:[Clarification about this statement.]

A bold statement!footnote:disclaimer[Opinions are my own.]

Another bold statement.footnote:disclaimer[]


== Bibliography

_The Pragmatic Programmer_ <<pp>> should be required reading for all developers.
To learn all about design patterns, refer to the book by the "`Gang of Four`" <<gof>>.

[bibliography]
== References

- [[[pp]]] Andy Hunt & Dave Thomas. The Pragmatic Programmer:
  From Journeyman to Master. Addison-Wesley. 1999.
- [[[gof,2]]] Erich Gamma, Richard Helm, Ralph Johnson & John Vlissides. Design Patterns:
  Elements of Reusable Object-Oriented Software. Addison-Wesley. 1994.
  '''
    import pdb
    pdb.set_trace()
    print(parse(string))
