declare var __SERVICE_NAME__: string;
declare var __PROJECT_NAME__: string;
declare var __PROJECT_DISPLAY_NAME__: string;
declare var __PROJECT_ENVIRONMENT__: "dev" | "prod";
declare var __PROJECT_VERSION__: string;
declare var __PROJECT_COMMITS_SINCE_RELEASE__: number;
declare var __PROJECT_COMPILE_TIME__: number;
declare var __PROJECT_COMMIT_SHA__: string;
declare var __PROJECT_AUTHOR__: string;

export const Project = Object.freeze({
  serviceName: __SERVICE_NAME__,
  name: __PROJECT_NAME__,
  displayName: __PROJECT_DISPLAY_NAME__,
  environment: __PROJECT_ENVIRONMENT__,
  version: __PROJECT_VERSION__,
  commitsSinceRelease: __PROJECT_COMMITS_SINCE_RELEASE__,
  compileTime: __PROJECT_COMPILE_TIME__,
  commitSha: __PROJECT_COMMIT_SHA__,
  author: __PROJECT_AUTHOR__,
});
