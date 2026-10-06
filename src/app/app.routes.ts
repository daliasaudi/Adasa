import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Blog } from './blog/blog';
import { About } from './about/about';
import { Article } from './article/article';
import { Privacy } from './privacy/privacy';
import { Terms } from './terms/terms';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'blog', component: Blog },
  { path: 'blog/:slug', component: Article },
  { path: 'about', component: About },
  { path: 'privacy', component: Privacy },
  { path: 'terms', component: Terms },
  { path: '**', redirectTo: '' }
];


