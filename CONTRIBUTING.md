# Contributing

## For feat bug-fix.

1. create a local branch from *next* of name _fix$number-issue\_$issue-name_ if the bug will be fixed in the 
   next rel. Otherwise create one branch from *patch-x.x.x* _fix$number-issue\_$iusse-name_.
   After testing and resolving the bug:

   1. create one commit for the fixing code.
   2. rebase master onto this branch
   3. _cherry pick_ first commit into *next* 

## For feat iusse + test iusse.

1. create a local branch of name _feat$number-issue\_$iusse-name_ from *next*
2. push the branch if necessary
3. create a merge request into *next* branch (only admin can merge local iusse branch into *next*)

When the mileston is completed create a merge request from _testing_ to _master_.
