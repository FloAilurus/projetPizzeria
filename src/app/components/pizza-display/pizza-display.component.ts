import { Component, OnInit } from '@angular/core';
import {Pizza} from "../../models/pizza.model";

@Component({
  selector: 'app-pizza-display',
  templateUrl: './pizza-display.component.html',
  styleUrls: ['./pizza-display.component.css']
})
export class PizzaDisplayComponent implements OnInit {

  pizzas: Pizza[] = [
    { name: "Margerita",
      img: "../assets/img/pizza-margherita.jpeg",
      price: 15
    },
    { name: "Margerita",
      img: "../assets/img/pizza-margherita.jpeg",
      price: 15
    },
    { name: "Margerita",
      img: "../assets/img/pizza-margherita.jpeg",
      price: 15
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
