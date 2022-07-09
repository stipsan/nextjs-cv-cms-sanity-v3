// @ts-check

export function isSocialImageDifferent(data) {
  if (
    (data.social?.eyebrow || data.social?.image?.eyebrow) &&
    data.social?.eyebrow !== data.social?.image?.eyebrow
  ) {
    console.log(
      'eyebrow is different',
      `${data.social?.eyebrow} !== ${data.social?.image?.eyebrow}`
    )
    return true
  }
  if (
    (data.social?.headshot?.asset?._ref || data.social?.image?.headshot) &&
    data.social?.headshot?.asset?._ref !== data.social?.image?.headshot
  ) {
    console.log(
      'headshot is different',
      `${data.social?.headshot?.asset?._ref} !== ${data.social?.image?.headshot}`
    )
    return true
  }
  if (
    (data.social?.name || data.social?.image?.name) &&
    data.social?.name !== data.social?.image?.name
  ) {
    console.log(
      'name is different',
      `${data.social?.name} !== ${data.social?.image?.name}`
    )
    return true
  }
  if (
    (data.social?.role || data.social?.image?.role) &&
    data.social?.role !== data.social?.image?.role
  ) {
    console.log(
      'role is different',
      `${data.social?.role} !== ${data.social?.image?.role}`
    )
    return true
  }
  if (
    (data.social?.pronouns || data.social?.image?.pronouns) &&
    data.social?.pronouns !== data.social?.image?.pronouns
  ) {
    console.log(
      'pronouns is different',
      `${data.social?.pronouns} !== ${data.social?.image?.pronouns}`
    )
    return true
  }

  return false
}
