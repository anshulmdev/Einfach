<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Grid" subtitle="Smart and super flexible for building awesome interfaces.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Elements</b-breadcrumb-item>
          <b-breadcrumb-item active>Grid</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Grid -->
      <h2 class="content-heading">Grid <small>Columns never collapse</small></h2>
      <b-row class="text-center">
        <b-col cols="3">
          <base-block rounded>
            <p>
              <code>cols="3"</code>
            </p>
          </base-block>
        </b-col>
        <b-col cols="3">
          <base-block rounded>
            <p>
              <code>cols="3"</code>
            </p>
          </base-block>
        </b-col>
        <b-col cols="3">
          <base-block rounded>
            <p>
              <code>cols="3"</code>
            </p>
          </base-block>
        </b-col>
        <b-col cols="3">
          <base-block rounded>
            <p>
              <code>cols="3"</code>
            </p>
          </base-block>
        </b-col>
      </b-row>
      <!-- END Grid -->

      <!-- sm Grid -->
      <h2 class="content-heading">sm Grid <small>Columns collapse at 576px</small></h2>
      <b-row class="text-center">
        <b-col sm="3">
          <base-block rounded>
            <p>
              <code>sm="3"</code>
            </p>
          </base-block>
        </b-col>
        <b-col sm="3">
          <base-block rounded>
            <p>
              <code>sm="3"</code>
            </p>
          </base-block>
        </b-col>
        <b-col sm="3">
          <base-block rounded>
            <p>
              <code>sm="3"</code>
            </p>
          </base-block>
        </b-col>
        <b-col sm="3">
          <base-block rounded>
            <p>
              <code>sm="3"</code>
            </p>
          </base-block>
        </b-col>
      </b-row>
      <!-- END sm Grid -->

      <!-- md Grid -->
      <h2 class="content-heading">md Grid <small>Columns collapse at 768px</small></h2>
      <b-row class="text-center">
        <b-col md="3">
          <base-block rounded>
            <p>
              <code>md="3"</code>
            </p>
          </base-block>
        </b-col>
        <b-col md="3">
          <base-block rounded>
            <p>
              <code>md="3"</code>
            </p>
          </base-block>
        </b-col>
        <b-col md="3">
          <base-block rounded>
            <p>
              <code>md="3"</code>
            </p>
          </base-block>
        </b-col>
        <b-col md="3">
          <base-block rounded>
            <p>
              <code>md="3"</code>
            </p>
          </base-block>
        </b-col>
      </b-row>
      <!-- END md Grid -->

      <!-- lg Grid -->
      <h2 class="content-heading">lg Grid <small>Columns collapse at 992px</small></h2>
      <b-row class="text-center">
        <b-col lg="3">
          <base-block rounded>
            <p>
              <code>lg="3"</code>
            </p>
          </base-block>
        </b-col>
        <b-col lg="3">
          <base-block rounded>
            <p>
              <code>lg="3"</code>
            </p>
          </base-block>
        </b-col>
        <b-col lg="3">
          <base-block rounded>
            <p>
              <code>lg="3"</code>
            </p>
          </base-block>
        </b-col>
        <b-col lg="3">
          <base-block rounded>
            <p>
              <code>lg="3"</code>
            </p>
          </base-block>
        </b-col>
      </b-row>
      <!-- END lg Grid -->

      <!-- xlg Grid -->
      <h2 class="content-heading">xl Grid <small>Columns collapse at 1200px</small></h2>
      <b-row class="text-center">
        <b-col xl="3">
          <base-block rounded>
            <p>
              <code>xl="3"</code>
            </p>
          </base-block>
        </b-col>
        <b-col xl="3">
          <base-block rounded>
            <p>
              <code>xl="3"</code>
            </p>
          </base-block>
        </b-col>
        <b-col xl="3">
          <base-block rounded>
            <p>
              <code>xl="3"</code>
            </p>
          </base-block>
        </b-col>
        <b-col xl="3">
          <base-block rounded>
            <p>
              <code>xl="3"</code>
            </p>
          </base-block>
        </b-col>
      </b-row>
      <!-- END xlg Grid -->

      <!-- Mixed Grid -->
      <h2 class="content-heading">Mixed Grid <small>For complex layouts</small></h2>
      <b-row class="text-center">
        <b-col sm="6" lg="3">
          <base-block rounded>
            <p>
              <code>md="6"</code> <code>xl="3"</code>
            </p>
          </base-block>
        </b-col>
        <b-col sm="6" lg="3">
          <base-block rounded>
            <p>
              <code>md="6"</code> <code>xl="3"</code>
            </p>
          </base-block>
        </b-col>
        <b-col sm="6" lg="3">
          <base-block rounded>
            <p>
              <code>md="6"</code> <code>xl="3"</code>
            </p>
          </base-block>
        </b-col>
        <b-col sm="6" lg="3">
          <base-block rounded>
            <p>
              <code>md="6"</code> <code>xl="3"</code>
            </p>
          </base-block>
        </b-col>
      </b-row>
      <!-- END Mixed Grid -->

      <!-- Complex Grid -->
      <h2 class="content-heading">Grid with Offsets <small>For complex layouts</small></h2>
      <b-row class="text-center">
        <b-col md="4" offset-md="1">
          <base-block rounded>
            <p>
              <code>md="4" offset-md="1"</code>
            </p>
          </base-block>
        </b-col>
        <b-col md="4" offset-md="2">
          <base-block rounded>
            <p>
              <code>md="4" offset-md="2"</code>
            </p>
          </base-block>
        </b-col>
      </b-row>
      <b-row class="text-center">
        <b-col md="4" offset-md="3">
          <base-block rounded>
            <p>
              <code>md="4" offset-md="3"</code>
            </p>
          </base-block>
        </b-col>
      </b-row>
      <b-row class="text-center">
        <b-col md="4" offset-md="6">
          <base-block rounded>
            <p>
              <code>md="4" offset-md="6"</code>
            </p>
          </base-block>
        </b-col>
      </b-row>
      <b-row class="text-center">
        <b-col md="6" offset-md="3">
          <base-block rounded>
            <p>
              <code>md="6" offset-md="3"</code>
            </p>
          </base-block>
        </b-col>
      </b-row>
      <b-row class="text-center">
        <b-col md="3" offset-md="1">
          <base-block rounded>
            <p>
              <code>md="3" offset-md="1"</code>
            </p>
          </base-block>
        </b-col>
        <b-col md="3" offset-md="4">
          <base-block rounded>
            <p>
              <code>md="3" offset-md-4</code>
            </p>
          </base-block>
        </b-col>
      </b-row>
      <b-row class="text-center">
        <b-col md="3">
          <base-block rounded>
            <p>
              <code>md="3"</code>
            </p>
          </base-block>
        </b-col>
        <b-col md="3" class="ml-auto">
          <base-block rounded>
            <p>
              <code>md="3" class="ml-auto"</code>
            </p>
          </base-block>
        </b-col>
      </b-row>
      <b-row class="text-center">
        <b-col lg="4" class="ml-auto">
          <base-block rounded>
            <p>
              <code>col-lg-4 class="ml-auto"</code>
            </p>
          </base-block>
        </b-col>
        <b-col lg="4" class="mr-auto">
          <base-block rounded>
            <p>
              <code>col-lg-4 class="mr-auto"</code>
            </p>
          </base-block>
        </b-col>
      </b-row>
      <b-row class="justify-content-center text-center">
        <b-col md="4">
          <base-block rounded>
            <p>
              <code>md="6"</code> and <code>justify-content-center</code> in <code>row</code>
            </p>
          </base-block>
        </b-col>
      </b-row>
      <!-- END Complex Grids -->

      <!-- Small Grid Gutters -->
      <h2 class="content-heading">Small Grid Gutters <small>Useful for tiles/widgets</small></h2>
      <b-row class="gutters-tiny">
        <b-col cols="3">
          <base-block rounded>
            <p>
              ...
            </p>
          </base-block>
          <base-block rounded>
            <p>
              ...
            </p>
          </base-block>
          <base-block rounded>
            <p>
              ...
            </p>
          </base-block>
        </b-col>
        <b-col cols="3">
          <base-block rounded>
            <p>
              ...
            </p>
          </base-block>
          <base-block rounded>
            <p>
              ...
            </p>
          </base-block>
          <base-block rounded>
            <p>
              ...
            </p>
          </base-block>
        </b-col>
        <b-col cols="3">
          <base-block rounded>
            <p>
              ...
            </p>
          </base-block>
          <base-block rounded>
            <p>
              ...
            </p>
          </base-block>
          <base-block rounded>
            <p>
              ...
            </p>
          </base-block>
        </b-col>
        <b-col cols="3">
          <base-block rounded>
            <p>
              ...
            </p>
          </base-block>
          <base-block rounded>
            <p>
              ...
            </p>
          </base-block>
          <base-block rounded>
            <p>
              ...
            </p>
          </base-block>
        </b-col>
      </b-row>
      <!-- END Small Grid Gutters -->

      <!-- Flat Grid -->
      <h2 class="content-heading">Flat Grid <small>No gutters</small></h2>
      <b-row no-gutters>
        <b-col cols="3">
          <base-block rounded class="bg-body-dark mb-0">
            <p>
              ...
            </p>
          </base-block>
          <base-block rounded class="mb-0">
            <p>
              ...
            </p>
          </base-block>
          <base-block rounded class="bg-body-dark mb-0">
            <p>
              ...
            </p>
          </base-block>
        </b-col>
        <b-col cols="3">
          <base-block rounded class="mb-0">
            <p>
              ...
            </p>
          </base-block>
          <base-block rounded class="bg-body-dark mb-0">
            <p>
              ...
            </p>
          </base-block>
          <base-block rounded class="mb-0">
            <p>
              ...
            </p>
          </base-block>
        </b-col>
        <b-col cols="3">
          <base-block rounded class="bg-body-dark mb-0">
            <p>
              ...
            </p>
          </base-block>
          <base-block rounded class="mb-0">
            <p>
              ...
            </p>
          </base-block>
          <base-block rounded class="bg-body-dark mb-0">
            <p>
              ...
            </p>
          </base-block>
        </b-col>
        <b-col cols="3">
          <base-block rounded class="mb-0">
            <p>
              ...
            </p>
          </base-block>
          <base-block rounded class="bg-body-dark mb-0">
            <p>
              ...
            </p>
          </base-block>
          <base-block rounded class="mb-0">
            <p>
              ...
            </p>
          </base-block>
        </b-col>
      </b-row>
      <!-- END Flat Grid -->

      <!-- Blocks in Grid -->
      <h2 class="content-heading">Blocks in Grid</h2>
      <b-row>
        <b-col md="6" xl="4">
          <base-block rounded title="Block">
            <template #options>
              <button type="button" class="btn-block-option">
                <i class="si si-settings"></i>
              </button>
            </template>
            <p>
              Block’s content..
            </p>
          </base-block>
        </b-col>
        <b-col md="6" xl="4">
          <base-block rounded title="Block">
            <template #options>
              <button type="button" class="btn-block-option">
                <i class="si si-settings"></i>
              </button>
            </template>
            <p>
              Block’s content..
            </p>
          </base-block>
        </b-col>
        <b-col md="6" xl="4">
          <base-block rounded title="Block">
            <template #options>
              <button type="button" class="btn-block-option">
                <i class="si si-settings"></i>
              </button>
            </template>
            <p>
              Block’s content..
            </p>
          </base-block>
        </b-col>
        <b-col md="6" xl="4">
          <base-block rounded title="Block">
            <template #options>
              <button type="button" class="btn-block-option">
                <i class="si si-settings"></i>
              </button>
            </template>
            <p>
              Block’s content..
            </p>
          </base-block>
        </b-col>
        <b-col md="6" xl="4">
          <base-block rounded title="Block">
            <template #options>
              <button type="button" class="btn-block-option">
                <i class="si si-settings"></i>
              </button>
            </template>
            <p>
              Block’s content..
            </p>
          </base-block>
        </b-col>
        <b-col md="6" xl="4">
          <base-block rounded title="Block">
            <template #options>
              <button type="button" class="btn-block-option">
                <i class="si si-settings"></i>
              </button>
            </template>
            <p>
              Block’s content..
            </p>
          </base-block>
        </b-col>
      </b-row>
      <!-- END Blocks in Grid -->

      <!-- Equal Blocks in Grid -->
      <h2 class="content-heading">Equal Blocks in Grid</h2>
      <b-row class="row-deck">
        <b-col sm="4">
          <base-block rounded title="Block">
            <template #options>
              <button type="button" class="btn-block-option">
                <i class="si si-settings"></i>
              </button>
            </template>
            <p>
              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
              proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
            </p>
          </base-block>
        </b-col>
        <b-col sm="4">
          <base-block rounded title="Block">
            <template #options>
              <button type="button" class="btn-block-option">
                <i class="si si-settings"></i>
              </button>
            </template>
            <p>
              Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante convallis ante urna molestie vulputate bibendum tempus ante justo arcu erat
              accumsan adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo turpis quisque etiam egestas vulputate massa, curabitur
              tellus massa venenatis congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi viverra luctus id leo dictum lorem, inceptos nibh orci.
            </p>
          </base-block>
        </b-col>
        <b-col sm="4">
          <base-block rounded title="Block">
            <template #options>
              <button type="button" class="btn-block-option">
                <i class="si si-settings"></i>
              </button>
            </template>
            <p>
              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
              proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
            </p>
          </base-block>
        </b-col>
      </b-row>
      <!-- END Equal Blocks in Grid -->

      <!-- Paragraphs in Grid -->
      <h2 class="content-heading">Paragraphs in Grid</h2>
      <base-block rounded title="Example">
        <b-row class="items-push">
          <b-col md="6">
            <h3>Flexible Grid</h3>
            <p>
              Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante convallis ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi viverra luctus id leo dictum lorem, inceptos nibh orci.
            </p>
          </b-col>
          <b-col md="6">
            <h3>Many Options</h3>
            <p>
              Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante convallis ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi viverra luctus id leo dictum lorem, inceptos nibh orci.
            </p>
          </b-col>
        </b-row>
        <b-row class="items-push">
          <b-col md="4">
            <h3 class="">For all screen sizes</h3>
            <p>
              Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante convallis ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi viverra luctus id leo dictum lorem, inceptos nibh orci.
            </p>
          </b-col>
          <b-col md="4">
            <h3>Easy to use</h3>
            <p>
              Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante convallis ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi viverra luctus id leo dictum lorem, inceptos nibh orci.
            </p>
          </b-col>
          <b-col md="4">
            <h3>Bootstrap Grid</h3>
            <p>
              Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante convallis ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi viverra luctus id leo dictum lorem, inceptos nibh orci.
            </p>
          </b-col>
        </b-row>
        <b-row class="items-push">
          <b-col md="4">
            <h3>12 Columns</h3>
            <p>
              Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante convallis ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi viverra luctus id leo dictum lorem, inceptos nibh orci.
            </p>
          </b-col>
          <b-col md="8">
            <h3>Multiple Layouts</h3>
            <p>
              Felis ullamcorper curae erat nulla luctus sociosqu phasellus posuere habitasse sollicitudin, libero sit potenti leo ultricies etiam blandit id platea augue, erat habitant fermentum lorem commodo taciti tristique etiam curabitur suscipit lacinia habitasse amet mauris eu eget ipsum nec magna in, adipiscing risus aenean turpis proin duis fringilla praesent ornare lorem eros malesuada vitae nullam diam velit potenti consectetur, vehicula accumsan risus lectus tortor etiam facilisis tempus sapien tortor, mi vestibulum taciti dapibus viverra ac justo vivamus erat phasellus turpis nisi class praesent duis ligula, vel ornare faucibus potenti nibh turpis, at id semper nunc dui blandit. Enim et nec habitasse ultricies id tortor curabitur, consectetur eu inceptos ante conubia tempor platea odio, sed sem integer lacinia cras non risus euismod turpis platea erat ultrices iaculis rutrum taciti, fusce lobortis adipiscing dapibus habitant sodales gravida pulvinar, elementum mi tempus ut commodo congue ipsum justo nec dui cursus scelerisque elementum volutpat tellus nulla laoreet taciti, nibh suspendisse primis arcu integer vulputate etiam ligula lobortis nunc, interdum commodo libero aliquam suscipit phasellus sollicitudin arcu varius venenatis erat ornare tempor nullam donec vitae etiam tellus.
            </p>
          </b-col>
        </b-row>
        <b-row class="items-push">
          <b-col md="8">
            <h3>Mobile, Tablets and Desktop</h3>
            <p>
              Felis ullamcorper curae erat nulla luctus sociosqu phasellus posuere habitasse sollicitudin, libero sit potenti leo ultricies etiam blandit id platea augue, erat habitant fermentum lorem commodo taciti tristique etiam curabitur suscipit lacinia habitasse amet mauris eu eget ipsum nec magna in, adipiscing risus aenean turpis proin duis fringilla praesent ornare lorem eros malesuada vitae nullam diam velit potenti consectetur, vehicula accumsan risus lectus tortor etiam facilisis tempus sapien tortor, mi vestibulum taciti dapibus viverra ac justo vivamus erat phasellus turpis nisi class praesent duis ligula, vel ornare faucibus potenti nibh turpis, at id semper nunc dui blandit. Enim et nec habitasse ultricies id tortor curabitur, consectetur eu inceptos ante conubia tempor platea odio, sed sem integer lacinia cras non risus euismod turpis platea erat ultrices iaculis rutrum taciti, fusce lobortis adipiscing dapibus habitant sodales gravida pulvinar, elementum mi tempus ut commodo congue ipsum justo nec dui cursus scelerisque elementum volutpat tellus nulla laoreet taciti, nibh suspendisse primis arcu integer vulputate etiam ligula lobortis nunc, interdum commodo libero aliquam suscipit phasellus sollicitudin arcu varius venenatis erat ornare tempor nullam donec vitae etiam tellus.
            </p>
          </b-col>
          <b-col md="4">
            <h3>Mixed Grid</h3>
            <p>
              Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante convallis ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi viverra luctus id leo dictum lorem, inceptos nibh orci.
            </p>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Paragraphs in Grid -->

      <!-- Responsive Utility Classes -->
      <base-block rounded title="Responsive Utility Classes" content-full>
        <p>For faster mobile-friendly development, use these utility classes for showing and hiding content by device via media query.</p>
        <b-table-simple hover bordered responsive class="text-center mb-0">
          <b-thead>
            <b-tr>
              <b-th style="min-width: 100px;"></b-th>
              <b-th>
                Extra small devices<br>
                <small class="font-w400 text-muted">Portrait phones (&lt;576px)</small>
              </b-th>
              <b-th>
                Small devices<br>
                <small class="font-w400 text-muted">Landscape phones (&ge;576px - &lt;768px)</small>
              </b-th>
              <b-th>
                Medium devices<br>
                <small class="font-w400 text-muted">Tablets (&ge;768px - &lt;992px)</small>
              </b-th>
              <b-th>
                Large devices<br>
                <small class="font-w400 text-muted">Desktops (&ge;992px - &lt;1200px)</small>
              </b-th>
              <b-th>
                Extra large devices<br>
                <small class="font-w400 text-muted">Desktops (&ge;1200px)</small>
              </b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td colspan="6">
                Available options for <code>*</code>: <code>inline</code> <code>inline-block</code> <code>block</code> <code>table</code> <code>table-cell</code> <code>flex</code> <code>inline-flex</code>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <code>.d-none</code> <code>.d-sm-*</code>
              </b-td>
              <b-td><i class="si si-close text-danger"></i></b-td>
              <b-td><i class="si si-check text-success"></i></b-td>
              <b-td><i class="si si-check text-success"></i></b-td>
              <b-td><i class="si si-check text-success"></i></b-td>
              <b-td><i class="si si-check text-success"></i></b-td>
            </b-tr>
            <b-tr>
              <b-td><code>.d-none</code> <code>.d-md-*</code></b-td>
              <b-td><i class="si si-close text-danger"></i></b-td>
              <b-td><i class="si si-close text-danger"></i></b-td>
              <b-td><i class="si si-check text-success"></i></b-td>
              <b-td><i class="si si-check text-success"></i></b-td>
              <b-td><i class="si si-check text-success"></i></b-td>
            </b-tr>
            <b-tr>
              <b-td><code>.d-none</code> <code>.d-lg-*</code></b-td>
              <b-td><i class="si si-close text-danger"></i></b-td>
              <b-td><i class="si si-close text-danger"></i></b-td>
              <b-td><i class="si si-close text-danger"></i></b-td>
              <b-td><i class="si si-check text-success"></i></b-td>
              <b-td><i class="si si-check text-success"></i></b-td>
            </b-tr>
            <b-tr>
              <b-td><code>.d-none</code> <code>.d-xl-*</code></b-td>
              <b-td><i class="si si-close text-danger"></i></b-td>
              <b-td><i class="si si-close text-danger"></i></b-td>
              <b-td><i class="si si-close text-danger"></i></b-td>
              <b-td><i class="si si-close text-danger"></i></b-td>
              <b-td><i class="si si-check text-success"></i></b-td>
            </b-tr>
          </b-tbody>
          <b-tbody>
            <b-tr>
              <b-td><code>.d-none</code></b-td>
              <b-td><i class="si si-close text-danger"></i></b-td>
              <b-td><i class="si si-close text-danger"></i></b-td>
              <b-td><i class="si si-close text-danger"></i></b-td>
              <b-td><i class="si si-close text-danger"></i></b-td>
              <b-td><i class="si si-close text-danger"></i></b-td>
            </b-tr>
          </b-tbody>
          <b-tbody>
            <b-tr>
              <b-td><code>.d-sm-none</code></b-td>
              <b-td><i class="si si-check text-success"></i></b-td>
              <b-td><i class="si si-close text-danger"></i></b-td>
              <b-td><i class="si si-close text-danger"></i></b-td>
              <b-td><i class="si si-close text-danger"></i></b-td>
              <b-td><i class="si si-close text-danger"></i></b-td>
            </b-tr>
            <b-tr>
              <b-td><code>.d-md-none</code></b-td>
              <b-td><i class="si si-check text-success"></i></b-td>
              <b-td><i class="si si-check text-success"></i></b-td>
              <b-td><i class="si si-close text-danger"></i></b-td>
              <b-td><i class="si si-close text-danger"></i></b-td>
              <b-td><i class="si si-close text-danger"></i></b-td>
            </b-tr>
            <b-tr>
              <b-td><code>.d-lg-none</code></b-td>
              <b-td><i class="si si-check text-success"></i></b-td>
              <b-td><i class="si si-check text-success"></i></b-td>
              <b-td><i class="si si-check text-success"></i></b-td>
              <b-td><i class="si si-close text-danger"></i></b-td>
              <b-td><i class="si si-close text-danger"></i></b-td>
            </b-tr>
            <b-tr>
              <b-td><code>.d-xl-none</code></b-td>
              <b-td><i class="si si-check text-success"></i></b-td>
              <b-td><i class="si si-check text-success"></i></b-td>
              <b-td><i class="si si-check text-success"></i></b-td>
              <b-td><i class="si si-check text-success"></i></b-td>
              <b-td><i class="si si-close text-danger"></i></b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </base-block>
      <!-- END Responsive Utility Classes -->
    </div>
    <!-- END Page Content -->
  </div>
</template>
