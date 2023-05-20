import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { ActivatedRoute } from '@angular/router';
import { map, pluck } from 'rxjs';

@Component({
  selector: 'hinv-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  comments$ = this.commentService.getComments();

  comm$ = this.activatedRoute.data.pipe(pluck('comments'));

  constructor(
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    // this.activatedRoute.data.subscribe((data) => console.log(data['comments']));
  }
}
