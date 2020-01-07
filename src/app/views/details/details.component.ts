import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { GeneralService } from 'src/app/shared/services/general.service';
import { Question } from 'src/app/shared/interface/interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent implements OnInit {
  subjectName: string;
  subjectId: string;
  pageNumber: number;
  limit: number;

  answers = { 'tags': ['typescript', 'type-systems'], 'answers': [{ 'owner': { 'badge_counts': { 'bronze': 264, 'silver': 136, 'gold': 12 }, 'reputation': 85056, 'user_id': 3001761, 'user_type': 'registered', 'profile_image': 'https://i.stack.imgur.com/feZwC.jpg?s=128&g=1', 'display_name': 'jonrsharpe', 'link': 'https://stackoverflow.com/users/3001761/jonrsharpe' }, 'is_accepted': false, 'score': 4, 'last_activity_date': 1578400066, 'creation_date': 1578400066, 'answer_id': 59628427, 'question_id': 59628330, 'body_markdown': 'Per [the docs][1]:\r\n\r\n&gt; For a `n in x` expression, where `n` is a string literal or string\r\n&gt; literal type and `x` is a union type, the “true” branch narrows to\r\n&gt; types which have an optional or required property `n`, and the “false”\r\n&gt; branch narrows to types which have an optional or missing property\r\n&gt; `n`.\r\n\r\nIn other words, `n in x` narrows *`x`*, not `n`, and only for string literals or string literal types `in` union types. For that expression to work, you&#39;d have to give the compiler more information, e.g. using a [*type assertion*][2]:\r\n\r\n\r\n    if (possibleKey in obj) {\r\n      console.log(obj[&lt;keyof typeof obj&gt;possibleKey]);\r\n    }\r\n\r\n  [1]: https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-the-in-operator\r\n  [2]: https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions', 'body': '<p>Per <a href="https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-the-in-operator" rel="nofollow noreferrer">the docs</a>:</p>\n\n<blockquote>\n  <p>For a <code>n in x</code> expression, where <code>n</code> is a string literal or string\n  literal type and <code>x</code> is a union type, the “true” branch narrows to\n  types which have an optional or required property <code>n</code>, and the “false”\n  branch narrows to types which have an optional or missing property\n  <code>n</code>.</p>\n</blockquote>\n\n<p>In other words, <code>n in x</code> narrows <em><code>x</code></em>, not <code>n</code>, and only for string literals or string literal types <code>in</code> union types. For that expression to work, you\'d have to give the compiler more information, e.g. using a <a href="https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions" rel="nofollow noreferrer"><em>type assertion</em></a>:</p>\n\n<pre><code>if (possibleKey in obj) {\n  console.log(obj[&lt;keyof typeof obj&gt;possibleKey]);\n}\n</code></pre>\n' }], 'owner': { 'badge_counts': { 'bronze': 11, 'silver': 4, 'gold': 0 }, 'reputation': 518, 'user_id': 2141469, 'user_type': 'registered', 'profile_image': 'https://www.gravatar.com/avatar/2a6130f3e7c06d3c5510be8aa1d98b12?s=128&d=identicon&r=PG', 'display_name': 'Andr&#233; Valenti', 'link': 'https://stackoverflow.com/users/2141469/andr%c3%a9-valenti' }, 'is_answered': true, 'view_count': 27, 'answer_count': 1, 'score': 1, 'last_activity_date': 1578400334, 'creation_date': 1578399623, 'question_id': 59628330, 'body_markdown': 'Consider this code:\r\n\r\n    const obj = {\r\n        a: 1,\r\n        b: 2\r\n    }\r\n    \r\n    let possibleKey: string = &#39;a&#39;\r\n    \r\n    if (possibleKey in obj) console.log(x[possibleKey])\r\n\r\nWhen `possibleKey in obj` is true, we know that `possibleKey` has type `keyof typeof obj`, right? Why doesn&#39;t TypeScript type system detects that and narrows down `string` to that type? Instead, it says:\r\n\r\n    Element implicitly has an &#39;any&#39; type because expression of type &#39;string&#39; can&#39;t be used to index type &#39;{ a: number; b: number; }&#39;.', 'link': 'https://stackoverflow.com/questions/59628330/why-doesnt-typescript-type-guard-in-narrows-types-to-keyof-types', 'title': 'Why doesn&#39;t TypeScript type guard &#39;in&#39; narrows types to keyof types?', 'body': '<p>Consider this code:</p>\n\n<pre><code>const obj = {\n    a: 1,\n    b: 2\n}\n\nlet possibleKey: string = \'a\'\n\nif (possibleKey in obj) console.log(x[possibleKey])\n</code></pre>\n\n<p>When <code>possibleKey in obj</code> is true, we know that <code>possibleKey</code> has type <code>keyof typeof obj</code>, right? Why doesn\'t TypeScript type system detects that and narrows down <code>string</code> to that type? Instead, it says:</p>\n\n<pre><code>Element implicitly has an \'any\' type because expression of type \'string\' can\'t be used to index type \'{ a: number; b: number; }\'.\n</code></pre>\n' };

  subjectDetails: any;
  Questions: Question[];
  step = 0;

  constructor(
    public activatedRoute: ActivatedRoute,
    public generalService: GeneralService,
    public router: Router,
  ) { }

  ngOnInit() {
    // this.getDetails();

    // this.answers = this.activatedRoute.snapshot.data.answers.items;
    console.log(this.answers);

    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        // this.getDetails();
        // this.getQuestions(this.subjectName, this.pageNumber, this.limit);
      }
    });
  }

}