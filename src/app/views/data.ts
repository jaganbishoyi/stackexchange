export const data = {
  items: [
    {
      tags: ["c++", "c", "sockets", "mainframe", "zos"],
      answers: [
        {
          owner: {
            badge_counts: {
              bronze: 406,
              silver: 355,
              gold: 41
            },
            reputation: 193113,
            user_id: 13,
            user_type: "registered",
            accept_rate: 100,
            profile_image: "https://i.stack.imgur.com/1XtZi.jpg?s=128&g=1",
            display_name: "Chris Jester-Young",
            link: "https://stackoverflow.com/users/13/chris-jester-young"
          },
          is_accepted: false,
          score: 37,
          last_activity_date: 1217593360,
          creation_date: 1217593360,
          answer_id: 30,
          question_id: 25,
          body:
            "<p>I've had no trouble using the BSD sockets API in C++, in GNU/Linux. Here's the sample program I used:</p>\n\n<pre><code>#include &lt;sys/socket.h&gt;\n\nint\nmain()\n{\n    return AF_INET;\n}\n</code></pre>\n\n<p>So my take on this is that z/OS is probably the complicating factor here, however, because I've never used z/OS before, much less programmed in it, I can't say this definitively. :-P</p>\n"
        },
        {
          owner: {
            badge_counts: {
              bronze: 406,
              silver: 355,
              gold: 41
            },
            reputation: 193113,
            user_id: 13,
            user_type: "registered",
            accept_rate: 100,
            profile_image: "https://i.stack.imgur.com/1XtZi.jpg?s=128&g=1",
            display_name: "Chris Jester-Young",
            link: "https://stackoverflow.com/users/13/chris-jester-young"
          },
          last_editor: {
            badge_counts: {
              bronze: 406,
              silver: 355,
              gold: 41
            },
            reputation: 193113,
            user_id: 13,
            user_type: "registered",
            accept_rate: 100,
            profile_image: "https://i.stack.imgur.com/1XtZi.jpg?s=128&g=1",
            display_name: "Chris Jester-Young",
            link: "https://stackoverflow.com/users/13/chris-jester-young"
          },
          is_accepted: false,
          score: 17,
          last_activity_date: 1217598865,
          last_edit_date: 1217598865,
          creation_date: 1217598016,
          answer_id: 73,
          question_id: 25,
          body:
            '<p>@Jax: The <code>extern "C"</code> thing matters, very very much. If a header file doesn\'t have one, then (unless it\'s a C++-only header file), you would have to enclose your <code>#include</code> with it:</p>\n\n<pre><code>extern "C" {\n#include &lt;sys/socket.h&gt;\n// include other similarly non-compliant header files\n}\n</code></pre>\n\n<p>Basically, anytime where a C++ program wants to link to C-based facilities, the <code>extern "C"</code> is vital. In practical terms, it means that the names used in external references will not be mangled, like normal C++ names would. <a href="http://www.parashift.com/c++-faq-lite/mixing-c-and-cpp.html" rel="noreferrer">Reference.</a></p>\n'
        },
        {
          owner: {
            badge_counts: {
              bronze: 7,
              silver: 3,
              gold: 0
            },
            reputation: 321,
            user_id: 3663,
            user_type: "registered",
            profile_image:
              "https://www.gravatar.com/avatar/f4bec4e9d5596cb2147c419a96ab1e71?s=128&d=identicon&r=PG",
            display_name: "David Bryson",
            link: "https://stackoverflow.com/users/3663/david-bryson"
          },
          is_accepted: false,
          score: 13,
          last_activity_date: 1220036179,
          creation_date: 1220036179,
          answer_id: 35029,
          question_id: 25,
          body:
            '<p>DISCLAIMER: I am not a C++ programmer, however I know C really well.  I\nadapated these calls from some C code I have.</p>\n\n<p>Also markdown put these strange &#95; as my underscores.</p>\n\n<p>You should just be able to write an abstraction class around the C sockets with something like this:</p>\n\n<pre><code>class my_sock {\n    private int sock;\n    private int socket_type;\n    private socklen_t sock_len;\n    private struct sockaddr_in server_addr;\n    public char *server_ip;\n    public unsigned short server_port;\n};\n</code></pre>\n\n<p>Then have methods for opening, closing, and sending packets down the socket.</p>\n\n<p>For example, the open call might look something like this:</p>\n\n<pre><code>int my_socket_connect()\n{\n    int return_code = 0;\n\n    if ( this-&gt;socket_type != CLIENT_SOCK ) {\n        cout &lt;&lt; "This is a not a client socket!\\n";\n        return -1;\n    }\n\n    return_code = connect( this-&gt;local_sock, (struct sockaddr *) &amp;this-&gt;server_addr, sizeof(this-&gt;server_addr));\n\n    if( return_code &lt; 0 ) {\n        cout &lt;&lt; "Connect() failure! %s\\n", strerror(errno);\n        return return_code;\n    }\n\n    return return_code;\n}\n</code></pre>\n'
        },
        {
          owner: {
            badge_counts: {
              bronze: 2,
              silver: 1,
              gold: 0
            },
            reputation: 201,
            user_id: 4981,
            user_type: "registered",
            profile_image:
              "https://www.gravatar.com/avatar/3227ccb7750508c3bd4ee25d1174ad03?s=128&d=identicon&r=PG",
            display_name: "Federico",
            link: "https://stackoverflow.com/users/4981/federico"
          },
          is_accepted: false,
          score: 19,
          last_activity_date: 1220775710,
          creation_date: 1220775710,
          answer_id: 48248,
          question_id: 25,
          body:
            '<p>You may want to take a look to <a href="http://sourceforge.net/projects/cpp-sockets/" rel="noreferrer">cpp-sockets</a>, a C++ wrapper for the sockets system calls. It works with many operating systems (Win32, POSIX, Linux, *BSD). I don\'t think it will work with z/OS but you can take a look at the include files it uses and you\'ll have many examples of tested code that works well on other OSs.</p>\n'
        },
        {
          owner: {
            badge_counts: {
              bronze: 59,
              silver: 36,
              gold: 8
            },
            reputation: 12403,
            user_id: 18167,
            user_type: "registered",
            accept_rate: 92,
            profile_image:
              "https://www.gravatar.com/avatar/251e4eeee4923936ff18699e5d1b2476?s=128&d=identicon&r=PG",
            display_name: "fizzer",
            link: "https://stackoverflow.com/users/18167/fizzer"
          },
          is_accepted: false,
          score: 25,
          last_activity_date: 1222000621,
          creation_date: 1222000621,
          answer_id: 110917,
          question_id: 25,
          body:
            "<p>So try</p>\n\n<pre><code>#define _OE_SOCKETS\n</code></pre>\n\n<p>before you include sys/socket.h</p>\n"
        },
        {
          owner: {
            badge_counts: {
              bronze: 49,
              silver: 33,
              gold: 5
            },
            reputation: 14441,
            user_id: 8999,
            user_type: "registered",
            accept_rate: 100,
            profile_image: "https://i.stack.imgur.com/ZD5Uo.jpg?s=128&g=1",
            display_name: "Fabio Ceconello",
            link: "https://stackoverflow.com/users/8999/fabio-ceconello"
          },
          is_accepted: false,
          score: 25,
          last_activity_date: 1359344701,
          last_edit_date: 1359344701,
          creation_date: 1223685529,
          answer_id: 193478,
          question_id: 25,
          body:
            '<p>The _OE_SOCKETS appears to be simply to enable/disable the definition of socket-related symbols. It is not uncommon in some libraries to have a bunch of macros to do that, to assure that you\'re not compiling/linking parts not needed. The macro is not standard in other sockets implementations, it appears to be something specific to z/OS.</p>\n\n<p>Take a look at this page:<br>\n<a href="http://publib.boulder.ibm.com/infocenter/zvm/v5r3/index.jsp?topic=/com.ibm.zvm.v53.kiml0/sktnew.htm" rel="noreferrer">Compiling and Linking a z/VM C Sockets Program</a></p>\n'
        },
        {
          owner: {
            badge_counts: {
              bronze: 48,
              silver: 33,
              gold: 5
            },
            reputation: 6715,
            user_id: 3534,
            user_type: "registered",
            accept_rate: 89,
            profile_image:
              "https://www.gravatar.com/avatar/c23da30b56055bb81161d9d9b3639e9c?s=128&d=identicon&r=PG",
            display_name: "Robert Groves",
            link: "https://stackoverflow.com/users/3534/robert-groves"
          },
          last_editor: {
            badge_counts: {
              bronze: 48,
              silver: 33,
              gold: 5
            },
            reputation: 6715,
            user_id: 3534,
            user_type: "registered",
            accept_rate: 89,
            profile_image:
              "https://www.gravatar.com/avatar/c23da30b56055bb81161d9d9b3639e9c?s=128&d=identicon&r=PG",
            display_name: "Robert Groves",
            link: "https://stackoverflow.com/users/3534/robert-groves"
          },
          is_accepted: false,
          score: 31,
          last_activity_date: 1353997152,
          last_edit_date: 1353997152,
          creation_date: 1242365229,
          answer_id: 867088,
          question_id: 25,
          body:
            '<p>See the <em>Using z/OS UNIX System Services sockets</em> section in the z/OS XL C/C++ Programming Guide.  Make sure you\'re including the necessary header files and using the appropriate #defines.</p>\n\n<p>The link to the doc has changed over the years, but you should be able to get to it easily enough by finding the current location of the <a href="http://ibm.com/support/entry/portal/documentation" rel="noreferrer">Support &amp; Downloads section</a> on <a href="http://www.ibm.com/" rel="noreferrer">ibm.com</a> and searching the documentation by title.</p>\n'
        },
        {
          owner: {
            badge_counts: {
              bronze: 16,
              silver: 14,
              gold: 0
            },
            reputation: 1629,
            user_id: 9816,
            user_type: "registered",
            profile_image: "https://i.stack.imgur.com/J4JgM.png?s=128&g=1",
            display_name: "Anthony Giorgio",
            link: "https://stackoverflow.com/users/9816/anthony-giorgio"
          },
          last_editor: {
            badge_counts: {
              bronze: 67,
              silver: 42,
              gold: 6
            },
            reputation: 6724,
            user_id: 422353,
            user_type: "registered",
            profile_image:
              "https://www.gravatar.com/avatar/3b1a3c7eb11abd99439c5b1b4b50b37f?s=128&d=identicon&r=PG",
            display_name: "madth3",
            link: "https://stackoverflow.com/users/422353/madth3"
          },
          is_accepted: true,
          score: 83,
          last_activity_date: 1359344742,
          last_edit_date: 1359344742,
          creation_date: 1253272621,
          answer_id: 1443907,
          question_id: 25,
          body:
            '<p>Keep a copy of the IBM manuals handy:</p>\n\n<ul>\n<li><a href="http://publibz.boulder.ibm.com/cgi-bin/bookmgr_OS390/BOOKS/CBCPG1A0/CCONTENTS?DT=20090606065305" rel="noreferrer"> z/OS V1R11.0 XL C/C++ Programming Guide</a>  </li>\n<li><a href="http://publibz.boulder.ibm.com/cgi-bin/bookmgr_OS390/BOOKS/EDCLB1A0/CCONTENTS?DT=20090607203246" rel="noreferrer"> z/OS V1R11.0 XL C/C++ Run-Time Library Reference</a>  </li>\n</ul>\n\n<p>The IBM publications are generally very good, but you need to get used to their format, as well as knowing where to look for an answer.  You\'ll find quite often that a feature that you want to use is guarded by a "feature test macro"</p>\n\n<p>You should ask your friendly system programmer to install the <a href="http://www-03.ibm.com/servers/eserver/zseries/zos/le/manpgs.html" rel="noreferrer">XL C/C++ Run-Time Library Reference: Man Pages\n</a> on your system.  Then you can do things like "man connect" to pull up the man page for the socket connect() API.  When I do that, this is what I see:</p>\n\n<p>FORMAT</p>\n\n<p>X/Open</p>\n\n<pre><code>#define _XOPEN_SOURCE_EXTENDED 1\n#include &lt;sys/socket.h&gt;\n\nint connect(int socket, const struct sockaddr *address, socklen_t address_len);\n</code></pre>\n\n<p>Berkeley Sockets</p>\n\n<pre><code>#define _OE_SOCKETS\n#include &lt;sys/types.h&gt;\n#include &lt;sys/socket.h&gt;\n\nint connect(int socket, struct sockaddr *address, int address_len);\n</code></pre>\n'
        },
        {
          owner: {
            badge_counts: {
              bronze: 2,
              silver: 1,
              gold: 0
            },
            reputation: 131,
            user_id: 702754,
            user_type: "unregistered",
            profile_image:
              "https://www.gravatar.com/avatar/439bcc8920ed03b0f8ac782e18cdb9d4?s=128&d=identicon&r=PG",
            display_name: "Hope T. Helps",
            link: "https://stackoverflow.com/users/702754/hope-t-helps"
          },
          is_accepted: false,
          score: 13,
          last_activity_date: 1302548363,
          creation_date: 1302548363,
          answer_id: 5626132,
          question_id: 25,
          body:
            "<p>The answer is use the c89 flag that follows:</p>\n\n<pre><code> -D_OE_SOCKETS\n</code></pre>\n\n<p>Example follows;</p>\n\n<pre><code> bash-2.03$ c89 -D_OE_SOCKETS [filename].c\n</code></pre>\n\n<p>For more information look for C89 Options in the z/OS XLC/C++ User's Guide.</p>\n"
        }
      ],
      owner: {
        badge_counts: {
          bronze: 37,
          silver: 23,
          gold: 4
        },
        reputation: 5769,
        user_id: 23,
        user_type: "registered",
        accept_rate: 83,
        profile_image: "https://i.stack.imgur.com/QWTks.jpg?s=128&g=1",
        display_name: "Jax",
        link: "https://stackoverflow.com/users/23/jax"
      },
      is_answered: true,
      view_count: 12225,
      protected_date: 1404930898,
      accepted_answer_id: 1443907,
      answer_count: 9,
      score: 148,
      last_activity_date: 1576232346,
      creation_date: 1217592830,
      last_edit_date: 1576232346,
      question_id: 25,
      link:
        "https://stackoverflow.com/questions/25/how-to-use-the-c-socket-api-in-c-on-z-os",
      title: "How to use the C socket API in C++ on z/OS",
      body:
        '<p>I\'m having issues getting the C sockets API to work properly in <code>C++</code> on <code>z/OS</code>.</p>\n\n<p>Although I am including <code>sys/socket.h</code>, I still get <strong>compile time errors</strong> telling me that <strong><code>AF_INET</code> is not defined</strong>.</p>\n\n<p>Am I missing something obvious, or is this related to the fact that being on <code>z/OS</code> makes my problems much more complicated?</p>\n\n<hr>\n\n<p><strong>Update</strong> : Upon further investigation, I discovered that there is an <code>#ifdef</code> that I\'m hitting. Apparently <code>z/OS</code> isn\'t happy unless I define which "type" of sockets I\'m using with:</p>\n\n<pre><code>#define _OE_SOCKETS\n</code></pre>\n\n<p>Now, I personally have no idea what this <code>_OE_SOCKETS</code> is actually for, so if any <code>z/OS</code> sockets programmers are out there (all 3 of you), perhaps you could give me a rundown of how this all works?</p>\n\n<hr>\n\n<p><strong>Test App</strong></p>\n\n<pre><code>#include &lt;sys/socket.h&gt;\n\nint main()\n{\n    return AF_INET;\n}\n</code></pre>\n\n<p><strong>Compile/Link Output:</strong></p>\n\n<pre><code>cxx -Wc,xplink -Wl,xplink -o inet_test inet.C\n\n"./inet.C", line 5.16: CCN5274 (S) The name lookup for "AF_INET" did not find a declaration.\nCCN0797(I) Compilation failed for file ./inet.C. Object file not created.\n</code></pre>\n\n<hr>\n\n<p>A check of sys/sockets.h does include the definition I need, and as far as I can tell, it is not being blocked by any <code>#ifdef</code> statements.</p>\n\n<p>I have however noticed it contains the following:</p>\n\n<pre><code>#ifdef __cplusplus\n  extern "C" {\n#endif\n</code></pre>\n\n<p>which encapsulates basically the whole file? Not sure if it matters.</p>\n'
    }
  ],
  has_more: false,
  quota_max: 10000,
  quota_remaining: 9818,
  page: 1,
  page_size: 30,
  total: 1,
  type: "question"
};
