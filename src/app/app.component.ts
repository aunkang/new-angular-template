import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'new-template';
  apps = [
    {
      name: 'User Management', id: "30",
      children: [
        {
          name: 'Log Manager', id: "14",
          children: [
            { name: 'Log manager without childrendddddddddddd', id: '2' },
            {
              name: 'Log manager with childrendddddddddddd', id: '3', children: [
                { name: 'log child1', id: '1' },
                { name: 'log child2', id: '0' }
              ]
            }
          ]
        },
        { name: 'User Management', id: "48" },
        { name: 'Group Management', id: "80" }
      ]
    },
    { name: 'Sample', children: [], id: "110" }
  ]

  ngOnInit(): void {
    this.listMenu(this.apps);
    this.loadScript('../assets/javascripts/theme.js');
  }

  private listMenu(apps, parentAppId = '') {
    const menu = document.getElementById('sub-menu');
    let parentApp;
    if (parentAppId !== '') {
      parentApp = document.getElementById(`a-${parentAppId}`);

      // parentApp.appendChild(document.createElement("ul"));
      parentApp.innerHTML += `
          <ul class="nav nav-children">
          </ul>
          `
      console.log(parentApp.innerHTML);
    }
    for (let each of apps) {
      if (each.hasOwnProperty('children') && each.children.length > 0) {
        if (parentAppId === '') {
          menu.innerHTML += `
          <li class="nav-parent" id="a-${each.id}">
            <a>
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <span>${each.name}</span>
            </a>
          </li>`
        } else {
          parentApp.getElementsByTagName('ul')[0].innerHTML += `
            <li class="nav-parent" id="a-${each.id}">
              <a>
                ${each.name}
              </a>
            </li>
          `
        }

        this.listMenu(each.children, each.id);
      } else {
        if (parentAppId === '') {
          menu.innerHTML += `
          <li id="a-${each.id}">
            <a>
              <span class="pull-right label label-primary">182</span>
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <span>${each.name}</span>
            </a>
          </li>`
        } else {
          console.log(parentApp.getElementsByTagName('ul'));
          parentApp.getElementsByTagName('ul')[0].innerHTML += `
            <li id="a-${each.id}" style="cursor: pointer;">
              <a>
                ${each.name}
              </a>
            </li>
          `
        }
      }
    }
  }


  private loadScript(url: string) {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
}
