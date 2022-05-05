import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'a simple test', 'https://cdn.pixabay.com/photo/2016/04/01/09/52/cartoon-1299636_960_720.png'),
    new Recipe('test2', 'another test', 'https://cdn.pixabay.com/photo/2016/04/01/09/52/cartoon-1299636_960_720.png')
  ];

  constructor() {}

  ngOnInit(): void {}
}
