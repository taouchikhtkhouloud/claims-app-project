import { Component } from '@angular/core';
import { MdbCarouselComponent, MdbCarouselItemComponent } from 'mdb-angular-ui-kit/carousel';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  mdbcarousel = MdbCarouselComponent
  mdbcarouselitem= MdbCarouselItemComponent
  items = [    { 
    name: 'International Program Developer',
   image: '../../../assets/images/Image.png' , 
   text:"Nesciunt et facilis atque incidunt qui voluptatem non. Facere id voluptatem dolore velit a.  Laborum dolorum voluptatibus deleniti id id quo ea voluptate incidunt. Laborum reiciendis qui aut officia doloribus veniam quidem dignissimos ." 
  },    
  { 
    name: 'International Program Developer',
   image: '../../../assets/images/Image.png', 
   text:"Nesciunt et facilis atque incidunt qui voluptatem non. Facere id voluptatem dolore velit a.  Laborum dolorum voluptatibus deleniti id id quo ea voluptate incidunt. Laborum reiciendis qui aut officia doloribus veniam quidem dignissimos ."
   },   
   { 
    name: 'International Program Developer', 
   image: "../../../assets/images/Image.png", 
   text:"Nesciunt et facilis atque incidunt qui voluptatem non. Facere id voluptatem dolore velit a.  Laborum dolorum voluptatibus deleniti id id quo ea voluptate incidunt. Laborum reiciendis qui aut officia doloribus veniam quidem dignissimos ."
   }];

}
