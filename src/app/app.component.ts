import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KitchenComponent } from './kitchen/kitchen.component';
import { DinningComponent } from './dinning/dinning.component';
import { LRoomComponent } from './l-room/l-room.component';
import { Product } from '../models/product.interface';
import { BathRoomComponent } from './bath-room/bath-room.component';
import { BedRoomComponent } from './bed-room/bed-room.component';
import { FormComponent } from './form/form.component';
import { AdminComponent } from "./admin/admin.component";
import { CardsComponent } from "./ui/cards/cards.component";
import { CarouselComponent } from "./ui/carousel/carousel.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FormComponent, KitchenComponent, DinningComponent, LRoomComponent, BathRoomComponent, BedRoomComponent, AdminComponent, CardsComponent, CarouselComponent]
})
export class AppComponent {
  title = 'Aiswarya';
isAdmin:boolean=true;



productName: Product[] = [];
productsByCategory: { category: string, products: Product[] }[] = [];
item: any;
  async getData(): Promise<void> {
    try {
      const response = await fetch('https://dummyjson.com/products');
      // const products = await response.json();
      const { products }: { products: Product[] } = await response.json();
      this.productName = products;
      console.log(this.productName);
      this.groupProductsByCategory(products);
      console.log(this.productsByCategory);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  groupProductsByCategory(products: Product[]): void {
    const grouped = products.reduce((acc, product) => {
      const category = product.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    }, {} as { [key: string]: Product[] });

    this.productsByCategory = Object.entries(grouped).map(([category, products]) => ({
      category,
      products
    }));
    console.log(this.productsByCategory);
    
  }

  

  ngOnInit(): void {
    this.getData();
  }
}


