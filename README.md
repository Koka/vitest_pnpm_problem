# Automocking problem in pnpm monorepos

We've encountered a problem in our pnpm monorepo when __mocks__ folder automocking doen't work for packages that are imported from pnpm workspace rather than npm registry.

## Project setup

    - packages/package_one - simple function exported, published to NPM as @koka58/package_one
    - packages/package_two - imports packages/package_one from pnpm workspace and tries to mock it
    - packages/package_three - imports packages/package_one from NPM registry and tries to mock it

## Problem

When we run `pnpm test` it works fine for `package_three`, but not `package_two`, while the only difference between them is the way they import `package_one`

## Reproduction

Run `pnpm test` in the repo root, see tests for `package_two` failing

## StackBlitz env to try

https://stackblitz.com/~/github.com/Koka/vitest_pnpm_problem
