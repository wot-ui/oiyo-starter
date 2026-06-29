import { onMounted, ref } from 'vue'

export interface TeamMember {
  avatar: string;
  name: string;
  title: string;
  tags?: string[];
  desc?: string;
  github?: string;
  twitter?: string;
}

type TeamMemberPayload = TeamMember & {
  status?: string;
}

const urls = [
  'https://sponsor.wot-ui.cn',
  'https://wot-sponsors.pages.dev',
]

const mockMembers: TeamMember[] = [

]

const data = ref<TeamMember[]>([])

function normalizeMembers(members: TeamMemberPayload[]): TeamMember[] {
  return members
    .filter(member => member?.avatar && member?.name && member?.title)
    .map((member) => {
      const tags = Array.isArray(member.tags)
        ? member.tags
        : (member.status ? [member.status] : [])

      return {
        avatar: member.avatar,
        name: member.name,
        title: member.title,
        tags,
        desc: member.desc,
        github: member.github,
        twitter: member.twitter,
      }
    })
}

function requestMembers(url: string): Promise<TeamMemberPayload[]> {
  return new Promise((resolve, reject) => {
    uni.request({
      url: `${url}/team.json?t=${Date.now()}`,
      method: 'GET',
      timeout: 5000,
      success: (response) => {
        const payload = response.data as { members?: TeamMemberPayload[] } | undefined
        resolve(Array.isArray(payload?.members) ? payload.members : [])
      },
      fail: reject,
    })
  })
}

async function fetchMembers() {
  for (const url of urls) {
    try {
      const members = await requestMembers(url)
      const normalizedMembers = normalizeMembers(members)

      if (normalizedMembers.length > 0) {
        return normalizedMembers
      }
    }
    catch {
      console.warn(`Failed to fetch team from ${url}`)
    }
  }

  return normalizeMembers(mockMembers)
}

export function useTeam() {
  onMounted(async () => {
    if (data.value.length) {
      return
    }

    data.value = await fetchMembers()
  })

  return { data }
}
