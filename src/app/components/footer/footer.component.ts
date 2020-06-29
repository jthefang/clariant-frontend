import { Component, OnInit } from '@angular/core';
import { faCircle, faSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  socialIcons = [
    {
      id: "LinkedIn",
      icon: faLinkedin,
      bg: faSquare,
      class: "fa-linkedin",
      link: "",
    },
    {
      id: "Instagram",
      icon: faInstagram,
      class: "fa-instagram",
      link: "",
    },
    {
      id: "Facebook",
      icon: faFacebookSquare,
      bg: faSquare,
      class: "fa-facebook",
      link: "",
    },
    {
      id: "Twitter",
      icon: faTwitter,
      class: "fa-twitter",
      link: "",
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
