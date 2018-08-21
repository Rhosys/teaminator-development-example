import 'url-polyfill';
import { DateTime } from 'luxon';

export default class MockTeamIdentityClient {
  constructor(realTeamIdentityClient) {
    this.realTeamIdentityClient = realTeamIdentityClient;
    this.mockTeamId = '28136948-90ab-4bd7-b0e0-3eb8ba2acc9f';
  }

  async getTeams() {
    return [{
      teamId: this.mockTeamId,
      teamName: 'Test Team',
      createdTime: DateTime.local().plus({ months: -3 }).toISO(),
      roles: ['Admin', 'TeamLead', 'Member']
    }];
  }

  async getTeamMembers() {
    return [
      { joinTime: '2018-04-17T18:21:03.716Z', status: 'ACTIVE', roles: ['Admin', 'TeamLead', 'Member'],
        name: 'Deby', email: 'deby@teaminator.io', avatar: { links: { self: { href: 'https://www.gravatar.com/avatar/2b1f8ebfd993a04ad2e8346b304134b6?d=404' } } },
        memberId: '4400eee4-635c-48b3-91df-22ccc100cf57'
      },
      { joinTime: '2018-04-17T18:21:03.865Z', status: 'ACTIVE', roles: ['Member'],
        name: 'Anjela', email: 'Anjela@teaminator.io', avatar: { links: { self: { href: 'https://www.gravatar.com/avatar/2cc65f36454ac15d8974c208dc5a5c23?d=404' } } },
        memberId: 'Anjela@teaminator.io'
      },
      { joinTime: '2018-04-17T18:21:03.865Z', status: 'ACTIVE', roles: ['Member'],
        name: 'Bill', email: 'Bill@teaminator.io', avatar: { links: { self: { href: 'https://www.gravatar.com/avatar/f923a2e0e56bbe248df69db9f638face?d=404' } } },
        memberId: 'Bill@teaminator.io'
      },
      { joinTime: '2018-04-17T18:21:03.865Z', status: 'ACTIVE', roles: ['Member'],
        name: 'Christoph', email: 'Christoph@teaminator.io', avatar: { links: { self: { href: 'https://www.gravatar.com/avatar/31455cb978875faa2de56579cbc395da?d=404' } } },
        memberId: 'Christoph@teaminator.io'
      },
      { joinTime: '2018-04-17T18:21:03.865Z', status: 'ACTIVE', roles: ['Member'],
        name: 'Eugene', email: 'Eugene@teaminator.io', avatar: { links: { self: { href: 'https://www.gravatar.com/avatar/474ea3313b5ce01f8bd2cae0925e81c2?d=404' } } },
        memberId: 'Eugene@teaminator.io'
      }
    ];
  }
}
