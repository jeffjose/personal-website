# Personal Website (frontend)
**jeffreyjose.com**


### TODO
- [firebase] /twitter, /github links
-- Doesnt work since `sapper export` doesnt know how to handle.
-- Might require firebase redirect for this.
-- If `goto` can handle external urls, this can be handled client side
- [firebase] 404
-- Firebase requires 404.html which can be 404.svelte
-- But for `sapper export` to work, it needs to be linked somewhere

### Notes
- prerun= runs prerun
- prerun:dev= runs just get_git_commit since we dont need index.yaml rebuild (for speed reasons)
- dev= prerun:dev + sapper dev
- build= prerun + sapper build --legacy
- build:only = sapper build --legacy (to be used by docker)
- docker = Run yarn prerun  before going into docker context


### TODO
- cloud build runs build_index, but frontend still uses github version. So there's no point for doing that.
-- This means the ideal workflow of pushign something to github and expecting that to show up on prod doesnt work
- adoc_from_covers doesnt remove if a cover.jpg is removed
