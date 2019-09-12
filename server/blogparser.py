#!/usr/bin/env python3

import asciidoc3api as api
import io

string = ''' = This is a lol doc. How about this though?

Yesterday we just celebrated the 5th Vueniversary — today we are excited to announce the release of Vue 2.6 “Macross”!

[.date]
Apr 23, 2017

[.hero]
image::https://cdn-images-1.medium.com/max/880/1*gNx3jSKwLvYhG12fznDyjQ.jpeg[]

In the past year, we spent a lot of time working on the new CLI and prototyping for 3.0. As a result, Vue core 2.x hasn’t received major updates in quite a while. It’s about time! This release combines a number of substantial improvements, internal changes and new features which are highlighted in this post. For full details, make sure to also check out the full release note on GitHub.


== Slots: New Syntax, Performance Improvements & Alignment with 3.0

Slots is an important mechanism that enables flexible component composition in Vue. During the prototyping for 3.0 we discovered a number of ways to improve it. Some of these can be introduced without breaking changes, which allows us to ship them in a 2.x minor release. For those that do require breaking changes, we are also trying to provide progressive alternatives in 2.x that would make future migrations easier.

=== New Syntax
The first step is the new syntax of scoped slots. We proposed, discussed and experimented with a number of different designs (1, 2, 3) and eventually landed on the new `v-slot` syntax outlined in this RFC. Here is a brief example using named slots:

[source,html]
----
<my-component>
  <template v-slot:header>
    <p>Header</p>
  </template>

  <template v-slot:item="{ data }">
    <h2>{{ data.title }}</h2>
    <p>{{ data.text }}</p>
  </template>

  <template v-slot:footer>
    <p>Footer</p>
  </template>
</my-component>
----
The new syntax unifies the usage of normal and scoped slots in a single directive, and enforces more explicit and readable named slots usage. It is also fully compatible with the existing syntax, which allows us to ship it today in 2.6.

If you are already familiar with the existing slot syntax, we recommend you to read through the RFC to better understand the rationale behind the new syntax. If you are not yet familiar with slots, it is recommended to go through the updated slots documentation instead.

=== Performance Improvements
Another improvement for slots we would like to see in 3.0 is the unification of normal vs. scoped slots in terms of implementation, due to the performance advantage of scoped slots. Normal slots are rendered during the parent’s render cycle. When a dependency of a slot changes, it causes both the parent and child components to re-render. Scoped slots, on the other hand, are compiled into inline functions and called during the child component’s render cycle. This means any data dependencies relied on by a scoped slot are collected by the child component, resulting in more precise updates. In 2.6, we have introduced an optimization that further ensures parent scope dependency mutations only affect the parent and would no longer force the child component to update if it uses only scoped slots.

'''

infile = io.StringIO(string)
outfile = io.StringIO()

a = api.AsciiDoc3API()
a.options('-e', 'asciidoc3.conf')
a.execute(infile, outfile, backend='html5')
print(outfile.getvalue())
