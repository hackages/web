import angular from 'angular';

// Iterators will be an awesome badass company

angular.module('web.iterators.io', [])
  .controller('AppController', ()=>{
    this.title = 'Iterators...';
  });

document.addEventListener('DOMContentLoaded', ()=>{
  angular.bootstrap(document.body, ['web.iterators.io'], {strictDi: true});
});
