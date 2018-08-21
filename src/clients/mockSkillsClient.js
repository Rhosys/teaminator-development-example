const skillRequests = [
  {
    teamId: '28136948-90ab-4bd7-b0e0-3eb8ba2acc9f',
    requestId: 'skillRequestId1',
    createdTime: '2018-08-17T10:17:03.999Z',
    lastUpdated: '2018-08-17T10:37:47.118Z',
    status: 'COMPLETED',
    links: {
      self: {
        href: 'skillRequestId1'
      }
    }
  },
  {
    teamId: '2ef10259-39d8-47f9-baeb-ac2f5ec4548c',
    requestId: 'skillRequestId2',
    createdTime: '2018-08-17T10:38:44.554Z',
    lastUpdated: '2018-08-17T10:39:31.221Z',
    status: 'PENDING',
    links: {
      self: {
        href: 'skillRequestId2'
      }
    }
  }
];

const skillRequestObjects = {
  skillRequestId1: {
    teamId: '28136948-90ab-4bd7-b0e0-3eb8ba2acc9f',
    requestId: 'skillRequestId1',
    createdTime: '2018-08-17T10:17:03.999Z',
    lastUpdated: '2018-08-17T10:37:47.118Z',
    status: 'COMPLETED',
    progress: {
      aws: 'COMPLETED',
      debugging: 'COMPLETED',
      devops: 'COMPLETED',
      nodejs: 'COMPLETED',
      testing: 'COMPLETED',
      ux_design: 'COMPLETED',
      visual_design: 'COMPLETED',
      vuejs: 'COMPLETED'
    },
    skills: {
      aws: 'AWS',
      debugging: 'Debugging',
      devops: 'DevOps',
      nodejs: 'Node.js',
      testing: 'Testing',
      ux_design: 'UX Design',
      visual_design: 'Visual Design',
      vuejs: 'Vue.js'
    },
    links: {
      self: {
        href: 'skillRequestId1'
      }
    }
  },
  skillRequestId2: {
    teamId: '2ef10259-39d8-47f9-baeb-ac2f5ec4548c',
    requestId: 'skillRequestId2',
    createdTime: '2018-08-17T10:38:44.554Z',
    lastUpdated: '2018-08-17T10:39:31.221Z',
    status: 'PENDING',
    progress: {
      aws: 'COMPLETED',
      debugging: 'COMPLETED',
      devops: 'PENDING',
      nodejs: 'PENDING',
      testing: 'PENDING',
      ux_design: 'PENDING',
      visual_design: 'PENDING',
      vuejs: 'PENDING'
    },
    skills: {
      aws: 'AWS',
      debugging: 'Debugging',
      devops: 'DevOps',
      nodejs: 'Node.js',
      testing: 'Testing',
      ux_design: 'UX Design',
      visual_design: 'Visual Design',
      vuejs: 'Vue.js'
    },
    links: {
      self: {
        href: 'skillRequestId2'
      }
    }
  }
};

const teamSkillReport = {
  lastUpdated: '2018-08-17T10:39:31.221Z',
  users: {
    '4400eee4-635c-48b3-91df-22ccc100cf57': {
      aws: {
        name: 'AWS',
        value: 4.333333333333333
      },
      debugging: {
        name: 'Debugging',
        value: 5
      },
      devops: {
        name: 'DevOps',
        value: 4.5
      },
      nodejs: {
        name: 'Node.js',
        value: 5
      },
      testing: {
        name: 'Testing',
        value: 3.25
      }
    },
    'Anjela@teaminator.io': {
      aws: {
        name: 'AWS',
        value: 2.666666666666667
      },
      debugging: {
        name: 'Debugging',
        value: 3
      },
      nodejs: {
        name: 'Node.js',
        value: 3.777777777777778
      },
      testing: {
        name: 'Testing',
        value: 5
      },
      ux_design: {
        name: 'UX Design',
        value: 2
      },
      visual_design: {
        name: 'Visual Design',
        value: 2
      },
      vuejs: {
        name: 'Vue.js',
        value: 3.333333333333333
      }
    },
    'Bill@teaminator.io': {
      debugging: {
        name: 'Debugging',
        value: 3.666666666666667
      },
      nodejs: {
        name: 'Node.js',
        value: 4.5
      },
      testing: {
        name: 'Testing',
        value: 2.333333333333333
      },
      ux_design: {
        name: 'UX Design',
        value: 5
      },
      visual_design: {
        name: 'Visual Design',
        value: 4.555555555555556
      },
      vuejs: {
        name: 'Vue.js',
        value: 5
      }
    },
    'Christoph@teaminator.io': {
      aws: {
        name: 'AWS',
        value: 5
      },
      debugging: {
        name: 'Debugging',
        value: 3.555555555555556
      },
      devops: {
        name: 'DevOps',
        value: 5
      },
      nodejs: {
        name: 'Node.js',
        value: 3
      },
      testing: {
        name: 'Testing',
        value: 2.25
      }
    },
    'Eugene@teaminator.io': {
      debugging: {
        name: 'Debugging',
        value: 4.444444444444444
      },
      nodejs: {
        name: 'Node.js',
        value: 3.5
      },
      testing: {
        name: 'Testing',
        value: 1.333333333333333
      },
      ux_design: {
        name: 'UX Design',
        value: 2.666666666666667
      },
      visual_design: {
        name: 'Visual Design',
        value: 4.777777777777778
      },
      vuejs: {
        name: 'Vue.js',
        value: 5
      }
    }
  },
  team: {
    aws: {
      name: 'AWS',
      value: 4
    },
    debugging: {
      name: 'Debugging',
      value: 3.933333333333333
    },
    devops: {
      name: 'DevOps',
      value: 4.75
    },
    nodejs: {
      name: 'Node.js',
      value: 3.955555555555556
    },
    testing: {
      name: 'Testing',
      value: 2.833333333333333
    },
    ux_design: {
      name: 'UX Design',
      value: 3.222222222222222
    },
    visual_design: {
      name: 'Visual Design',
      value: 3.777777777777778
    },
    vuejs: {
      name: 'Vue.js',
      value: 4.444444444444444
    }
  }
};

export default class MockSkillsClient {
  constructor() {
  }

  async getSkillRequests() {
    return skillRequests;
  }

  async getSkillRequest(requestId) {
    return skillRequestObjects[requestId];
  }

  async getTeamSkillReport() {
    return teamSkillReport;
  }

  async createSkillRequest() {
    return;
  }

  async respondToSkillRequest() {
    return;
  }
}
