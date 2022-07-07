// Determine useful env vars, fallback to defaults if none are defined

export const github = {
  // @TODO detect the ref
  ref: 'main',
  repository:
    process.env.GITHUB_REPOSITORY ||
    (process.env.VERCEL_GIT_REPO_OWNER &&
      process.env.VERCEL_GIT_REPO_SLUG &&
      `${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}`) ||
    null,
  token:
    process.env.GITHUB_TOKEN || process.env.WORKFLOW_DISPATCH_TOKEN || null,
}
