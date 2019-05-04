# Contributing

## For feat bug-fix.

1. create a local branch from *next* of name _$iusse-name#$number-issue\_m$milestone-name_ if the bug will be fixed in the 
   next rel. Otherwise create one branch from *patch-x.x.x* _$iusse-name#$number-issue\_p$pactch-name_.
   After testing and resolving the bug:

   1. create one commit for the fixing code.
   2. rebase master onto this branch
   3. _cherry pick_ first commit into *next* 

## For feat iusse + test iusse.

1. create a local branch of name _$iusse-name#$number-issue\_m$milestone-name_ from *next*
2. push the branch if necessary
3. create a merge request into *next* branch (only admin can merge local iusse branch into *next*)

When the milestone is completed create a merge request from _testing_ to _master_.

## Commit template

```
type[(scope)]:message
```

### type

```js
{
    feat: {
            desc: 'A new app feature.',
            scope: MustHave
        },
    fix: {
            desc: 'A bug fix.',
            scope: MustHave
        },
    refactor: {
                desc: 'A code change that not add a new feature or fix a bug.',
                scope: MustHave
            },
    style: {
            desc: 'A change that is not related to the code (formatting only).',
            hasScope: ShouldHave
        },
    docs: {
            desc: 'A change related to documentation only',
            hasScope: ShouldHave
        },
    build: {
            desc: 'Everything related to build process.',
            hasScope: MustNotHave
        },
    revert: {
            desc: 'Revert a previus commit',
            hasScope: MustNotHave
            },
    merge: {
            desc: 'A merge commit',
            hasScope: MustNotHave
        },
    repos: {
        desc: 'Used to change the repository structure',
        hasscope: MustNotHave
    }    
}
```

### scope

The scope are related to the packeges of this monolithic repo.
