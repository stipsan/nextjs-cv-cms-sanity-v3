export function isSocialImageDifferent(data) {
  if (
    (data.social?.eyebrow || data.social?.image?.eyebrow) &&
    data.social?.eyebrow !== data.social?.image?.eyebrow
  ) {
    console.log(
      'eyebrow is different',
      `${JSON.stringify(data.social?.eyebrow)} !== ${JSON.stringify(
        data.social?.image?.eyebrow
      )}`
    )
    return true
  }
  if (
    (data.social?.headshot?.asset?._ref || data.social?.image?.headshot) &&
    data.social?.headshot?.asset?._ref !== data.social?.image?.headshot
  ) {
    console.log(
      'headshot is different',
      `${JSON.stringify(
        data.social?.headshot?.asset?._ref
      )} !== ${JSON.stringify(data.social?.image?.headshot)}`
    )
    return true
  }
  if (
    (data.social?.name || data.social?.image?.name) &&
    data.social?.name !== data.social?.image?.name
  ) {
    console.log(
      'name is different',
      `${JSON.stringify(data.social?.name)} !== ${JSON.stringify(
        data.social?.image?.name
      )}`
    )
    return true
  }
  if (
    (data.social?.role || data.social?.image?.role) &&
    data.social?.role !== data.social?.image?.role
  ) {
    console.log(
      'role is different',
      `${JSON.stringify(data.social?.role)} !== ${JSON.stringify(
        data.social?.image?.role
      )}`
    )
    return true
  }
  if (
    (data.social?.pronouns || data.social?.image?.pronouns) &&
    data.social?.pronouns !== data.social?.image?.pronouns
  ) {
    console.log(
      'pronouns is different',
      `${JSON.stringify(data.social?.pronouns)} !== ${JSON.stringify(
        data.social?.image?.pronouns
      )}`
    )
    return true
  }

  return false
}
