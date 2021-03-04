<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Typography" subtitle="Good Typography not only looks good but also reinforces the meaning of the content.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Elements</b-breadcrumb-item>
          <b-breadcrumb-item active>Typography</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Headings -->
      <h2 class="content-heading">Headings</h2>
      <b-row>
        <b-col lg="6">
          <!-- Bold -->
          <base-block rounded title="Bold" subtitle="(600 - Default)">
            <h1>h1. Title <small>Subtitle</small></h1>
            <h2>h2. Title <small>Subtitle</small></h2>
            <h3>h3. Title <small>Subtitle</small></h3>
            <h4>h4. Title <small>Subtitle</small></h4>
            <h5>h5. Title <small>Subtitle</small></h5>
          </base-block>
          <!-- END Bold -->
        </b-col>
        <b-col lg="6">
          <!-- Extra Bold -->
          <base-block rounded title="Extra Bold" subtitle="(700)">
            <h1 class="font-w700">h1. Title <small>Subtitle</small></h1>
            <h2 class="font-w700">h2. Title <small>Subtitle</small></h2>
            <h3 class="font-w700">h3. Title <small>Subtitle</small></h3>
            <h4 class="font-w700">h4. Title <small>Subtitle</small></h4>
            <h5 class="font-w700">h5. Title <small>Subtitle</small></h5>
          </base-block>
          <!-- END Extra Bold -->
        </b-col>
        <b-col lg="6">
          <!-- Normal -->
          <base-block rounded title="Normal" subtitle="(400)">
            <h1 class="font-w400">h1. Title <small>Subtitle</small></h1>
            <h2 class="font-w400">h2. Title <small>Subtitle</small></h2>
            <h3 class="font-w400">h3. Title <small>Subtitle</small></h3>
            <h4 class="font-w400">h4. Title <small>Subtitle</small></h4>
            <h5 class="font-w400">h5. Title <small>Subtitle</small></h5>
          </base-block>
          <!-- END Normal -->
        </b-col>
        <b-col lg="6">
          <!-- Light -->
          <base-block rounded title="Light" subtitle="(300)">
            <h1 class="font-w400">h1. Title <small>Subtitle</small></h1>
            <h2 class="font-w400">h2. Title <small>Subtitle</small></h2>
            <h3 class="font-w400">h3. Title <small>Subtitle</small></h3>
            <h4 class="font-w400">h4. Title <small>Subtitle</small></h4>
            <h5 class="font-w400">h5. Title <small>Subtitle</small></h5>
          </base-block>
          <!-- END Light -->
        </b-col>
        <b-col cols="12">
          <!-- Hero Headings -->
          <base-block rounded title="Headings">
            <b-row>
              <b-col lg="6">
                <h2 class="display-1"><span class="d-none d-sm-inline-block">Title</span> Display 1</h2>
                <h2 class="display-2"><span class="d-none d-sm-inline-block">Title</span> Display 2</h2>
              </b-col>
              <b-col lg="6">
                <h2 class="display-3"><span class="d-none d-sm-inline-block">Title</span> Display 3</h2>
                <h2 class="display-4"><span class="d-none d-sm-inline-block">Title</span> Display 4</h2>
              </b-col>
            </b-row>
          </base-block>
          <!-- END Hero Headings -->
        </b-col>
      </b-row>
      <!-- END Headings -->

      <!-- Typography -->
      <h2 class="content-heading">Typography</h2>

      <!-- Badges Styles -->
      <base-block rounded title="Badges">
        <b-row>
          <b-col md="6">
            <h3 class="h4">Default</h3>
            <p>
              <b-badge>Default</b-badge>
              <b-badge variant="primary">Primary</b-badge>
              <b-badge variant="success">Success</b-badge>
              <b-badge variant="info">Info</b-badge>
              <b-badge variant="warning">Warning</b-badge>
              <b-badge variant="danger">Danger</b-badge>
            </p>
            <p>
              <b-badge><i class="fa fa-home"></i> Home</b-badge>
              <b-badge variant="primary"><i class="fa fa-cog"></i> Settings</b-badge>
              <b-badge variant="success"><i class="fa fa-check"></i> Great!</b-badge>
              <b-badge variant="info"><i class="fa fa-info-circle"></i> More Info</b-badge>
              <b-badge variant="warning"><i class="fa fa-exclamation-circle"></i> Attention</b-badge>
              <b-badge variant="danger"><i class="fa fa-times-circle"></i> Error</b-badge>
            </p>
          </b-col>
          <b-col md="6">
            <h3 class="h4">Pills</h3>
            <p>
              <b-badge pill>Default</b-badge>
              <b-badge pill variant="primary">Primary</b-badge>
              <b-badge pill variant="success">Success</b-badge>
              <b-badge pill variant="info">Info</b-badge>
              <b-badge pill variant="warning">Warning</b-badge>
              <b-badge pill variant="danger">Danger</b-badge>
            </p>
            <p>
              <b-badge pill><i class="fa fa-home"></i> Home</b-badge>
              <b-badge pill variant="primary"><i class="fa fa-cog"></i> Settings</b-badge>
              <b-badge pill variant="success"><i class="fa fa-check"></i> Great!</b-badge>
              <b-badge pill variant="info"><i class="fa fa-info-circle"></i> More Info</b-badge>
              <b-badge pill variant="warning"><i class="fa fa-exclamation-circle"></i> Attention</b-badge>
              <b-badge pill variant="danger"><i class="fa fa-times-circle"></i> Error</b-badge>
            </p>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Badges Styles -->

      <!-- Text -->
      <base-block rounded title="Text">
        <b-row>
          <b-col xl="6">
            <p>The following snippet of text is <strong>rendered as bold text</strong>.</p>
            <p>The following snippet of text is <em>rendered as italicized text</em>.</p>
          </b-col>
          <b-col xl="6">
            <p>You can use the mark tag to <mark>highlight</mark> text.</p>
            <p><del>This line of text is meant to be treated as deleted text.</del></p>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Text -->

      <!-- Links -->
      <base-block rounded title="Links">
        <b-row>
          <b-col md="4">
            <p>
              <b-link href="javascript:void(0)">Default link</b-link>
            </p>
            <p>
              <b-link class="text-success" href="javascript:void(0)">Success link</b-link>
            </p>
            <p>
              <b-link class="text-info" href="javascript:void(0)">Info link</b-link>
            </p>
            <p>
              <b-link class="text-warning" href="javascript:void(0)">Warning link</b-link>
            </p>
            <p>
              <b-link class="text-danger" href="javascript:void(0)">Danger link</b-link>
            </p>
          </b-col>
          <b-col md="4">
            <p>
              <b-link class="link-fx" href="javascript:void(0)">Link with effect</b-link>
            </p>
            <p>
              <b-link class="link-fx text-success" href="javascript:void(0)">Success link with effect</b-link>
            </p>
            <p>
              <b-link class="link-fx text-info" href="javascript:void(0)">Info link with effect</b-link>
            </p>
            <p>
              <b-link class="link-fx text-warning" href="javascript:void(0)">Warning link with effect</b-link>
            </p>
            <p>
              <b-link class="link-fx text-danger" href="javascript:void(0)">Danger link with effect</b-link>
            </p>
          </b-col>
          <b-col md="4">
            <p>
              <b-badge href="javascript:void(0)" variant="primary">Badge link</b-badge>
            </p>
            <p>
              <b-badge href="javascript:void(0)" variant="success">Success Badge link</b-badge>
            </p>
            <p>
              <b-badge href="javascript:void(0)" variant="info">Info Badge link</b-badge>
            </p>
            <p>
              <b-badge href="javascript:void(0)" variant="warning">Warning Badge link</b-badge>
            </p>
            <p>
              <b-badge href="javascript:void(0)" variant="danger">Danger Badge link</b-badge>
            </p>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Links -->

      <!-- Contextual Colors -->
      <base-block rounded title="Contextual Colors">
        <b-row>
          <b-col sm="4">
            <p class="text-success">This text has the success color..</p>
            <p class="text-info">This text has the info color..</p>
            <p class="text-warning">This text has the warning color..</p>
            <p class="text-danger">This text has the danger color..</p>
            <p class="text-muted">This text has the muted color..</p>
          </b-col>
          <b-col sm="4">
            <p class="text-primary-darker">This text has the primary darker color..</p>
            <p class="text-primary-dark">This text has the primary dark color..</p>
            <p class="text-primary">This text has the primary color ..</p>
            <p class="text-primary-light">This text has the primary light color..</p>
            <p class="text-primary-lighter">This text has the primary lighter color..</p>
          </b-col>
          <b-col sm="4">
            <p class="text-gray-darker">This text has the gray darker color..</p>
            <p class="text-gray-dark">This text has the gray dark color..</p>
            <p class="text-gray">This text has the gray color ..</p>
            <p class="text-gray-light">This text has the gray light color..</p>
            <p class="text-gray-lighter">This text has the gray lighter color..</p>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Contextual Colors -->

      <!-- Lists -->
      <base-block rounded title="Contextual Colors">
        <b-row class="items-push">
          <b-col lg="3">
            <h3>Unordered List</h3>
            <ul>
              <li>First item</li>
              <li>Second item</li>
              <li>
                Sublist
                <ul>
                  <li>First subitem</li>
                  <li>Second subitem</li>
                  <li>Third subitem</li>
                </ul>
              </li>
              <li>Third item</li>
            </ul>
          </b-col>
          <b-col lg="3">
            <h3>Ordered List</h3>
            <ol>
              <li>First item</li>
              <li>Second item</li>
              <li>
                Sublist
                <ol>
                  <li>First subitem</li>
                  <li>Second subitem</li>
                  <li>Third subitem</li>
                </ol>
              </li>
              <li>Third item</li>
            </ol>
          </b-col>
          <b-col lg="3">
            <h3>Icon List</h3>
            <ul class="fa-ul">
              <li>
                <span class="fa-li">
                  <i class="fa fa-arrow-right"></i>
                </span>
                First item
              </li>
              <li>
                <span class="fa-li">
                  <i class="fa fa-arrow-right"></i>
                </span>
                Second item
              </li>
              <li>
                <span class="fa-li">
                  <i class="fa fa-arrow-right"></i>
                </span>
                Sublist
                <ul class="fa-ul">
                  <li>
                    <span class="fa-li">
                      <i class="fa fa-angle-right"></i>
                    </span>
                    First subitem
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fa fa-angle-right"></i>
                    </span>
                    Second subitem
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fa fa-angle-right"></i>
                    </span>
                    Second subitem
                  </li>
                </ul>
              </li>
              <li>
                <span class="fa-li">
                  <i class="fa fa-arrow-right"></i>
                </span>
                Third item
              </li>
            </ul>
          </b-col>
          <b-col lg="3">
            <h3>Unstyled List</h3>
            <ul class="list-unstyled">
              <li>First item</li>
              <li>Second item</li>
              <li>
                Sublist
                <ul>
                  <li>First subitem</li>
                  <li>Second subitem</li>
                  <li>Third subitem</li>
                </ul>
              </li>
              <li>Third item</li>
            </ul>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Lists -->

      <!-- Contextual Backgrounds -->
      <base-block rounded class="Contextual Backgrounds">
        <b-row class="text-white font-w600">
          <b-col md>
            <p class="p-3 bg-success">Success</p>
          </b-col>
          <b-col md>
            <p class="p-3 bg-info">Info</p>
          </b-col>
          <b-col md>
            <p class="p-3 bg-warning">Warning</p>
          </b-col>
          <b-col md>
            <p class="p-3 bg-danger">Danger</p>
          </b-col>
          <b-col md>
            <p class="p-3 bg-muted">Muted</p>
          </b-col>
        </b-row>
        <b-row class="text-white font-w600">
          <b-col md>
            <p class="p-3 bg-success-light text-success">Success Light</p>
          </b-col>
          <b-col md>
            <p class="p-3 bg-info-light text-info">Info Light</p>
          </b-col>
          <b-col md>
            <p class="p-3 bg-warning-light text-warning">Warning Light</p>
          </b-col>
          <b-col md>
            <p class="p-3 bg-danger-light text-danger">Danger Light</p>
          </b-col>
          <b-col md>
            <p class="p-3 bg-gray-light text-gray-darker">Muted Light</p>
          </b-col>
        </b-row>
        <b-row class="text-white font-w600">
          <b-col md>
            <p class="p-3 bg-primary-darker">Darker</p>
          </b-col>
          <b-col md>
            <p class="p-3 bg-primary-dark">Dark</p>
          </b-col>
          <b-col md>
            <p class="p-3 bg-primary">Primary</p>
          </b-col>
          <b-col md>
            <p class="p-3 bg-primary-light">Light</p>
          </b-col>
          <b-col md>
            <p class="p-3 bg-primary-lighter">Lighter</p>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Contextual Backgrounds -->

      <!-- Extras -->
      <b-row class="row-deck">
        <b-col md="6">
          <!-- Blockquotes -->
          <base-block rounded title="Blockquotes">
            <blockquote class="blockquote">
              <p class="mb-0">Be yourself; everyone else is already taken.</p>
              <footer class="blockquote-footer">Oscar Wilde</footer>
            </blockquote>
            <blockquote class="blockquote text-right">
              <p class="mb-0">Don't cry because it's over, smile because it happened.</p>
              <footer class="blockquote-footer">Dr. Seuss</footer>
            </blockquote>
          </base-block>
          <!-- END Blockquotes -->
        </b-col>
        <b-col md="6">
          <!-- Addresses -->
          <base-block rounded title="Addresses">
            <address>
              <strong>Twitter, Inc.</strong><br>
              795 Folsom Ave, Suite 600<br>
              San Francisco, CA 94107<br>
              <abbr title="Phone">P:</abbr> (123) 456-7890
            </address>
            <address>
              <strong>Full Name</strong><br>
              <a href="mailto:#">first.last@example.com</a>
            </address>
          </base-block>
          <!-- END Addresses -->
        </b-col>
      </b-row>
      <!-- END Extras -->
      <!-- END Typography -->

      <!-- Paragraphs -->
      <h2 class="content-heading">Paragraphs</h2>
      <b-row class="row-deck">
        <b-col md="4">
          <!-- Lead -->
          <base-block rounded title="Lead">
            <p class="lead">
              This is a lead paragraph. You can use it you highlight your main point before your article. It is great for such usage.
            </p>
          </base-block>
          <!-- END Lead -->
        </b-col>
        <b-col md="8">
          <!-- Normal -->
          <base-block rounded title="Normal">
            <p>
              Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante convallis ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi viverra luctus id leo dictum lorem, inceptos nibh orci.
            </p>
            <p>
              Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante convallis ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi viverra luctus id leo dictum lorem, inceptos nibh orci.
            </p>
          </base-block>
          <!-- END Normal -->
        </b-col>
      </b-row>
      <!-- END Paragraphs -->
    </div>
    <!-- END Page Content -->
  </div>
</template>
