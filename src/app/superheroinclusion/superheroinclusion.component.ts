import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-superheroinclusion',
  templateUrl: './superheroinclusion.component.html',
  styleUrls: ['./superheroinclusion.component.scss']
})
export class SuperheroinclusionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#box0").css('background-color', 'rgb(114, 170, 5)');
    var height = $(window).height();
    $('.main').on('scroll', function (e) {
      // console.log($('.main').scrollTop())
      let boxno = '#box' + Math.trunc($('.main').scrollTop() / height);
      // console.log(boxno) 
      $(boxno).css('background-color', 'rgb(114, 170, 5)');
      for (let i of [0, 1, 2, 3, 4, 5, 6, 7, 8]) {

        if (i.toString() == Math.trunc($('.main').scrollTop() / height).toString()) continue;
        // console.log(i.toString() == Math.trunc($('.main').scrollTop() / height).toString(), i.toString(), Math.trunc($('.main').scrollTop() / height).toString());
        let temp = '#box' + i.toString();
        // console.log(temp)
        $(temp).css('background-color', 'rgb(192, 192, 192)');
      }
    })
    $('#db').on('click', function (e) {
      $('.main').animate({
        scrollTop: $('.main').scrollTop() + (height - ($('.main').scrollTop() % height))
      },
        'slow');
    })

    $('#ub').on('click', function (e) {
      $('.main').animate({
        scrollTop: $('.main').scrollTop() - (height - ($('.main').scrollTop() % height))
      },
        'slow');
    })
  }

}
