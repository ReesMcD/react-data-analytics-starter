/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TeamTeamIdImport } from './routes/team/$teamId'
import { Route as PlayerPlayerIdImport } from './routes/player/$playerId'

// Create Virtual Routes

const ChartsLazyImport = createFileRoute('/charts')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const ChartsLazyRoute = ChartsLazyImport.update({
  path: '/charts',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/charts.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const TeamTeamIdRoute = TeamTeamIdImport.update({
  path: '/team/$teamId',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/team/$teamId.lazy').then((d) => d.Route))

const PlayerPlayerIdRoute = PlayerPlayerIdImport.update({
  path: '/player/$playerId',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/player/$playerId.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/charts': {
      id: '/charts'
      path: '/charts'
      fullPath: '/charts'
      preLoaderRoute: typeof ChartsLazyImport
      parentRoute: typeof rootRoute
    }
    '/player/$playerId': {
      id: '/player/$playerId'
      path: '/player/$playerId'
      fullPath: '/player/$playerId'
      preLoaderRoute: typeof PlayerPlayerIdImport
      parentRoute: typeof rootRoute
    }
    '/team/$teamId': {
      id: '/team/$teamId'
      path: '/team/$teamId'
      fullPath: '/team/$teamId'
      preLoaderRoute: typeof TeamTeamIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/charts': typeof ChartsLazyRoute
  '/player/$playerId': typeof PlayerPlayerIdRoute
  '/team/$teamId': typeof TeamTeamIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/charts': typeof ChartsLazyRoute
  '/player/$playerId': typeof PlayerPlayerIdRoute
  '/team/$teamId': typeof TeamTeamIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/charts': typeof ChartsLazyRoute
  '/player/$playerId': typeof PlayerPlayerIdRoute
  '/team/$teamId': typeof TeamTeamIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/charts' | '/player/$playerId' | '/team/$teamId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/charts' | '/player/$playerId' | '/team/$teamId'
  id: '__root__' | '/' | '/charts' | '/player/$playerId' | '/team/$teamId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  ChartsLazyRoute: typeof ChartsLazyRoute
  PlayerPlayerIdRoute: typeof PlayerPlayerIdRoute
  TeamTeamIdRoute: typeof TeamTeamIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  ChartsLazyRoute: ChartsLazyRoute,
  PlayerPlayerIdRoute: PlayerPlayerIdRoute,
  TeamTeamIdRoute: TeamTeamIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/charts",
        "/player/$playerId",
        "/team/$teamId"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/charts": {
      "filePath": "charts.lazy.tsx"
    },
    "/player/$playerId": {
      "filePath": "player/$playerId.tsx"
    },
    "/team/$teamId": {
      "filePath": "team/$teamId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
