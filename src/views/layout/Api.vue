<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Layout API">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Layout</b-breadcrumb-item>
          <b-breadcrumb-item active>API</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Sidebar Visibility -->
      <base-block rounded title="Sidebar Visibility" content-full>
        <b-table-simple striped responsive class="text-vcenter mb-0">
          <b-thead>
            <b-tr>
              <b-th style="min-width: 300px; width: 300px;">Live</b-th>
              <b-th style="min-width: 380px; width: 380px;">JS</b-th>
              <b-th style="min-width: 400px;">Component</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td>
                <base-layout-modifier action="sidebarToggle" variant="alt-primary" class="mb-3">Toggle Sidebar</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Opens or Closes Sidebar based on its current state
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('sidebar', { mode: 'toggle' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;sidebarToggle&quot;&gt;Toggle Sidebar&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <base-layout-modifier action="sidebarOpen" variant="alt-primary" class="mb-3">Open Sidebar</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Opens Sidebar
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('sidebar', { mode: 'open' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;sidebarOpen&quot;&gt;Open Sidebar&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <base-layout-modifier action="sidebarClose" variant="alt-primary" class="mb-3">Close Sidebar</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Closes Sidebar
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('sidebar', { mode: 'close' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;sidebarClose&quot;&gt;Close Sidebar&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </base-block>
      <!-- END Sidebar Visibility -->

      <!-- Sidebar Position -->
      <base-block rounded title="Sidebar Position" content-full>
        <b-table-simple striped responsive class="text-vcenter mb-0">
          <b-thead>
            <b-tr>
              <b-th style="min-width: 300px; width: 300px;">Live</b-th>
              <b-th style="min-width: 380px; width: 380px;">JS</b-th>
              <b-th style="min-width: 400px;">Component</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td>
                <base-layout-modifier action="sidebarPositionToggle" variant="alt-primary" class="mb-3">Toggle Sidebar Position</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Sets Sidebar position to the left or to the right based on its current position
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('sidebarPosition', { mode: 'toggle' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;sidebarPositionToggle&quot;&gt;Toggle Sidebar Position&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <base-layout-modifier action="sidebarPositionRight" variant="alt-primary" class="mb-3">Right Sidebar Position</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Moves Sidebar to the right
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('sidebarPosition', { mode: 'right' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;sidebarPositionRight&quot;&gt;Right Sidebar Position&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <base-layout-modifier action="sidebarPositionLeft" variant="alt-primary" class="mb-3">Left Sidebar Position</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Moves Sidebar to the left
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('sidebarPosition', { mode: 'left' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;sidebarPositionLeft&quot;&gt;Left Sidebar Position&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </base-block>
      <!-- END Sidebar Position -->

      <!-- Sidebar Mini -->
      <base-block rounded title="Sidebar Mini" content-full>
        <b-table-simple striped responsive class="text-vcenter mb-0">
          <b-thead>
            <b-tr>
              <b-th style="min-width: 300px; width: 300px;">Live</b-th>
              <b-th style="min-width: 380px; width: 380px;">JS</b-th>
              <b-th style="min-width: 400px;">Component</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td>
                <base-layout-modifier action="sidebarMiniToggle" variant="alt-primary" class="mb-3">Toggle Mini Mode</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Toggles Sidebar mini mode
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('sidebarMini', { mode: 'toggle' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;sidebarMiniToggle&quot;&gt;Toggle Mini Mode&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <base-layout-modifier action="sidebarMiniOn" variant="alt-primary" class="mb-3">Enable Mini Mode</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Enables Sidebar mini mode
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('sidebarMini', { mode: 'on' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;sidebarMiniOn&quot;&gt;Enable Mini Mode&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <base-layout-modifier action="sidebarMiniOff" variant="alt-primary" class="mb-3">Disable Mini Mode</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Disables Sidebar mini mode
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('sidebarMini', { mode: 'off' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;sidebarMiniOff&quot;&gt;Disable Mini Mode&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </base-block>
      <!-- END Sidebar Mini -->

      <!-- Sidebar Styles -->
      <base-block rounded title="Sidebar Styles" content-full>
        <b-table-simple striped responsive class="text-vcenter mb-0">
          <b-thead>
            <b-tr>
              <b-th style="min-width: 300px; width: 300px;">Live</b-th>
              <b-th style="min-width: 380px; width: 380px;">JS</b-th>
              <b-th style="min-width: 400px;">Component</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td>
                <base-layout-modifier action="sidebarStyleToggle" variant="alt-primary" class="mb-3">Toggle Sidebar Style</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Toggles Sidebar style between light and dark variations
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('sidebarStyle', { mode: 'toggle' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;sidebarStyleToggle&quot;&gt;Toggle Sidebar Style&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <base-layout-modifier action="sidebarStyleLight" variant="alt-primary" class="mb-3">Light Themed Sidebar</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Sets Sidebar to light variation
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('sidebarStyle', { mode: 'light' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;sidebarStyleLight&quot;&gt;Light Themed Sidebar&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <base-layout-modifier action="sidebarStyleDark" variant="alt-primary" class="mb-3">Dark Themed Sidebar</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Sets Sidebar to dark variation
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('sidebarStyle', { mode: 'dark' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;sidebarStyleDark&quot;&gt;Dark Themed Sidebar&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </base-block>
      <!-- END Sidebar Styles -->

      <!-- Side Overlay Visibility -->
      <base-block rounded title="Side Overlay Visibility" content-full>
        <b-table-simple striped responsive class="text-vcenter mb-0">
          <b-thead>
            <b-tr>
              <b-th style="min-width: 300px; width: 300px;">Live</b-th>
              <b-th style="min-width: 380px; width: 380px;">JS</b-th>
              <b-th style="min-width: 400px;">Component</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td>
                <base-layout-modifier action="sideOverlayToggle" variant="alt-primary" class="mb-3">Toggle Side Overlay</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Opens or Closes Side Overlay based on its current state
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('sideOverlay', { mode: 'toggle' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;sideOverlayToggle&quot;&gt;Toggle Side Overlay&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <base-layout-modifier action="sideOverlayOpen" variant="alt-primary" class="mb-3">Open Side Overlay</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Opens Side Overlay
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('sideOverlay', { mode: 'open' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;sideOverlayOpen&quot;&gt;Open Side Overlay&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <base-layout-modifier action="sideOverlayClose" variant="alt-primary" class="mb-3">Close Side Overlay</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Closes Side Overlay
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('sideOverlay', { mode: 'close' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;sideOverlayClose&quot;&gt;Close Side Overlay&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </base-block>
      <!-- END Side Overlay Visibility -->

      <!-- Side Overlay Hover Mode -->
      <base-block rounded title="Side Overlay Hover Mode" content-full>
        <b-table-simple striped responsive class="text-vcenter mb-0">
          <b-thead>
            <b-tr>
              <b-th style="min-width: 300px; width: 300px;">Live</b-th>
              <b-th style="min-width: 380px; width: 380px;">JS</b-th>
              <b-th style="min-width: 400px;">Component</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td>
                <base-layout-modifier action="sideOverlayHoverToggle" variant="alt-primary" class="mb-3">Toggle Hover Mode</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Toggles Side Overlay hover mode
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('sideOverlayHover', { mode: 'toggle' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;sideOverlayHoverToggle&quot;&gt;Toggle Hover Mode&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <base-layout-modifier action="sideOverlayHoverOn" variant="alt-primary" class="mb-3">Enable Hover Mode</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Enables Side Overlay hover mode
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('sideOverlayHover', { mode: 'on' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;sideOverlayHoverOn&quot;&gt;Enable Hover Mode&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <base-layout-modifier action="sideOverlayHoverOff" variant="alt-primary" class="mb-3">Disable Hover Mode</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Disables Side Overlay hover mode
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('sideOverlayHover', { mode: 'off' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;sideOverlayHoverOff&quot;&gt;Disable Hover Mode&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </base-block>
      <!-- END Side Overlay Hover Mode -->

      <!-- Header Mode -->
      <base-block rounded title="Header Mode" content-full>
        <b-table-simple striped responsive class="text-vcenter mb-0">
          <b-thead>
            <b-tr>
              <b-th style="min-width: 300px; width: 300px;">Live</b-th>
              <b-th style="min-width: 380px; width: 380px;">JS</b-th>
              <b-th style="min-width: 400px;">Component</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td>
                <base-layout-modifier action="headerToggle" variant="alt-primary" class="mb-3">Toggle Header Mode</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Toggles Header mode between static and fixed
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('header', { mode: 'toggle' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;headerToggle&quot;&gt;Toggle Header Mode&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <base-layout-modifier action="headerStatic" variant="alt-primary" class="mb-3">Static Header</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Sets the Header to static mode
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('header', { mode: 'static' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;headerStatic&quot;&gt;Static Header&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <base-layout-modifier action="headerFixed" variant="alt-primary" class="mb-3">Fixed Header</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Sets the Header to fixed mode
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('header', { mode: 'fixed' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;headerFixed&quot;&gt;Fixed Header&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </base-block>
      <!-- END Header Mode -->

      <!-- Header Styles -->
      <base-block rounded title="Header Styles" content-full>
        <b-table-simple striped responsive class="text-vcenter mb-0">
          <b-thead>
            <b-tr>
              <b-th style="min-width: 300px; width: 300px;">Live</b-th>
              <b-th style="min-width: 380px; width: 380px;">JS</b-th>
              <b-th style="min-width: 400px;">Component</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td>
                <base-layout-modifier action="headerStyleToggle" variant="alt-primary" class="mb-3">Toggle Header Style</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Toggles Header style between light and dark variations
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('headerStyle', { mode: 'toggle' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;headerStyleToggle&quot;&gt;Toggle Header Style&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <base-layout-modifier action="headerStyleLight" variant="alt-primary" class="mb-3">Light Themed Header</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Sets Header to light variation
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('headerStyle', { mode: 'light' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;headerStyleLight&quot;&gt;Light Themed Header&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <base-layout-modifier action="headerStyleDark" variant="alt-primary" class="mb-3">Dark Themed Header</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Sets Header to dark variation
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('headerStyle', { mode: 'dark' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;headerStyleDark&quot;&gt;Dark Themed Header&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </base-block>
      <!-- END Header Styles -->

      <!-- Main Content -->
      <base-block rounded title="Main Content" content-full>
        <b-table-simple striped responsive class="text-vcenter mb-0">
          <b-thead>
            <b-tr>
              <b-th style="min-width: 300px; width: 300px;">Live</b-th>
              <b-th style="min-width: 380px; width: 380px;">JS</b-th>
              <b-th style="min-width: 400px;">Component</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td>
                <base-layout-modifier action="mainContentBoxed" variant="alt-primary" class="mb-3">Boxed Content Layout</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Sets the content layout to boxed
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('mainContent', { mode: 'boxed' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;mainContentBoxed&quot;&gt;Boxed Content Layout&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <base-layout-modifier action="mainContentNarrow" variant="alt-primary" class="mb-3">Narrow Content Layout</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Sets the content layout to narrow
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('mainContent', { mode: 'narrow' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;mainContentNarrow&quot;&gt;Narrow Content Layout&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <base-layout-modifier action="mainContentFull" variant="alt-primary" class="mb-3">Full Width Content Layout</base-layout-modifier>
                <p class="font-size-sm mb-0">
                  Sets the content layout to full width
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('mainContent', { mode: 'full' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;mainContentFull&quot;&gt;Full Width Content Layout&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </base-block>
      <!-- END Main Content -->
    </div>
    <!-- END Page Content -->
  </div>
</template>
