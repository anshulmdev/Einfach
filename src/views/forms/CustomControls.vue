<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Custom Form Controls" subtitle="CSS based and completely JavaScript free component.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Forms</b-breadcrumb-item>
          <b-breadcrumb-item active>Custom Form Controls</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Switches -->
      <base-block rounded title="Switches">
        <!-- Default -->
        <h2 class="content-heading border-bottom mb-4 pb-2">Default</h2>
        <b-row class="push">
          <b-col lg="4">
            <p class="font-size-sm text-muted">
              These are the default custom switches
            </p>
          </b-col>
          <b-col lg="8" xl="5">
            <b-form-group label="Switches" label-class="font-w600">
              <b-form-checkbox-group v-model="switches" switches stacked>
                <b-form-checkbox value="1">Option 1</b-form-checkbox>
                <b-form-checkbox value="2">Option 2</b-form-checkbox>
                <b-form-checkbox value="3">Option 3</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
            <b-form-group label="Inline Switches" label-class="font-w600">
              <b-form-checkbox-group v-model="switches" switches>
                <b-form-checkbox value="1">Option 1</b-form-checkbox>
                <b-form-checkbox value="2">Option 2</b-form-checkbox>
                <b-form-checkbox value="3">Option 3</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
          </b-col>
        </b-row>
        <!-- END Default -->

        <!-- Large Size -->
        <h2 class="content-heading border-bottom mb-4 pb-2">Large Size</h2>
        <b-row class="push">
          <b-col lg="4">
            <p class="font-size-sm text-muted">
              You can use bigger controls if you like
            </p>
          </b-col>
          <b-col lg="8" xl="5">
            <b-form-group label="Switches" label-class="font-w600">
              <b-form-checkbox-group v-model="switches" switches stacked>
                <b-form-checkbox class="custom-control-lg mb-2" value="1">Option 1</b-form-checkbox>
                <b-form-checkbox class="custom-control-lg mb-2" value="2">Option 2</b-form-checkbox>
                <b-form-checkbox class="custom-control-lg mb-2" value="3">Option 3</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
            <b-form-group label="Inline Switches" label-class="font-w600">
              <b-form-checkbox-group v-model="switches" switches>
                <b-form-checkbox class="custom-control-lg mb-2" value="1">Option 1</b-form-checkbox>
                <b-form-checkbox class="custom-control-lg mb-2" value="2">Option 2</b-form-checkbox>
                <b-form-checkbox class="custom-control-lg mb-2" value="3">Option 3</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
          </b-col>
        </b-row>
        <!-- END Large Size -->

        <!-- Themed -->
        <h2 class="content-heading border-bottom mb-4 pb-2">Themed</h2>
        <b-row class="push">
          <b-col lg="4">
            <p class="font-size-sm text-muted">
              You can easily use various colors for your custom switches
            </p>
          </b-col>
          <b-col lg="8" xl="5">
            <label>Default Size</label>
            <b-row class="push">
              <b-col cols="6">
                <b-form-checkbox-group switches stacked>
                  <b-form-checkbox class="custom-control-primary mb-2" value="primary">Primary</b-form-checkbox>
                  <b-form-checkbox class="custom-control-success mb-2" value="success">Success</b-form-checkbox>
                  <b-form-checkbox class="custom-control-info mb-2" value="info">Info</b-form-checkbox>
                  <b-form-checkbox class="custom-control-warning mb-2" value="warning">Warning</b-form-checkbox>
                  <b-form-checkbox class="custom-control-danger mb-2" value="danger">Danger</b-form-checkbox>
                  <b-form-checkbox class="custom-control-light mb-2" value="light">Light</b-form-checkbox>
                  <b-form-checkbox class="custom-control-dark mb-2" value="dark">Dark</b-form-checkbox>
                </b-form-checkbox-group>
              </b-col>
              <b-col cols="6">
                <b-form-checkbox-group v-model="switchesThemed" switches stacked>
                  <b-form-checkbox class="custom-control-primary mb-2" value="primary">Primary</b-form-checkbox>
                  <b-form-checkbox class="custom-control-success mb-2" value="success">Success</b-form-checkbox>
                  <b-form-checkbox class="custom-control-info mb-2" value="info">Info</b-form-checkbox>
                  <b-form-checkbox class="custom-control-warning mb-2" value="warning">Warning</b-form-checkbox>
                  <b-form-checkbox class="custom-control-danger mb-2" value="danger">Danger</b-form-checkbox>
                  <b-form-checkbox class="custom-control-light mb-2" value="light">Light</b-form-checkbox>
                  <b-form-checkbox class="custom-control-dark mb-2" value="dark">Dark</b-form-checkbox>
                </b-form-checkbox-group>
              </b-col>
            </b-row>
            <label>Large Size</label>
            <b-row class="push">
              <b-col cols="6">
                <b-form-checkbox-group switches stacked>
                  <b-form-checkbox class="custom-control-lg custom-control-primary mb-2" value="primary">Primary</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-success mb-2" value="success">Success</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-info mb-2" value="info">Info</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-warning mb-2" value="warning">Warning</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-danger mb-2" value="danger">Danger</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-light mb-2" value="light">Light</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-dark mb-2" value="dark">Dark</b-form-checkbox>
                </b-form-checkbox-group>
              </b-col>
              <b-col cols="6">
                <b-form-checkbox-group v-model="switchesThemedLarge" switches stacked>
                  <b-form-checkbox class="custom-control-lg custom-control-primary mb-2" value="primary">Primary</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-success mb-2" value="success">Success</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-info mb-2" value="info">Info</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-warning mb-2" value="warning">Warning</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-danger mb-2" value="danger">Danger</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-light mb-2" value="light">Light</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-dark mb-2" value="dark">Dark</b-form-checkbox>
                </b-form-checkbox-group>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <!-- END Themed -->
      </base-block>
      <!-- END Switches -->

      <!-- Checkboxes -->
      <base-block rounded title="Checkboxes">
        <!-- Based on Bootstrap -->
        <h2 class="content-heading border-bottom mb-4 pb-2">Based on Bootstrap</h2>
        <b-row class="push">
          <b-col lg="4">
            <p class="font-size-sm text-muted">
              These are the default Bootstrap custom checkboxes
            </p>
          </b-col>
          <b-col lg="8" xl="5">
            <b-form-group label="Switches" label-class="font-w600">
              <b-form-checkbox-group v-model="checkboxes" stacked>
                <b-form-checkbox value="1">Option 1</b-form-checkbox>
                <b-form-checkbox value="2">Option 2</b-form-checkbox>
                <b-form-checkbox value="3">Option 3</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
            <b-form-group label="Inline Switches" label-class="font-w600">
              <b-form-checkbox-group v-model="checkboxes">
                <b-form-checkbox value="1">Option 1</b-form-checkbox>
                <b-form-checkbox value="2">Option 2</b-form-checkbox>
                <b-form-checkbox value="3">Option 3</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
          </b-col>
        </b-row>
        <!-- END Based on Bootstrap -->

        <!-- Large Size -->
        <h2 class="content-heading border-bottom mb-4 pb-2">Large Size</h2>
        <b-row class="push">
          <b-col lg="4">
            <p class="font-size-sm text-muted">
              You can use bigger controls if you like
            </p>
          </b-col>
          <b-col lg="8" xl="5">
            <b-form-group label="Switches" label-class="font-w600">
              <b-form-checkbox-group v-model="checkboxes" stacked>
                <b-form-checkbox class="custom-control-lg mb-2" value="1">Option 1</b-form-checkbox>
                <b-form-checkbox class="custom-control-lg mb-2" value="2">Option 2</b-form-checkbox>
                <b-form-checkbox class="custom-control-lg mb-2" value="3">Option 3</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
            <b-form-group label="Inline Switches" label-class="font-w600">
              <b-form-checkbox-group v-model="checkboxes">
                <b-form-checkbox class="custom-control-lg mb-2" value="1">Option 1</b-form-checkbox>
                <b-form-checkbox class="custom-control-lg mb-2" value="2">Option 2</b-form-checkbox>
                <b-form-checkbox class="custom-control-lg mb-2" value="3">Option 3</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
          </b-col>
        </b-row>
        <!-- END Large Size -->

        <!-- Themed -->
        <h2 class="content-heading border-bottom mb-4 pb-2">Themed</h2>
        <b-row class="push">
          <b-col lg="4">
            <p class="font-size-sm text-muted">
              You can easily use various colors for your custom checkboxes
            </p>
          </b-col>
          <b-col lg="8" xl="5">
            <label>Default Size</label>
            <b-row class="push">
              <b-col cols="6">
                <b-form-checkbox-group stacked>
                  <b-form-checkbox class="custom-control-primary mb-2" value="primary">Primary</b-form-checkbox>
                  <b-form-checkbox class="custom-control-success mb-2" value="success">Success</b-form-checkbox>
                  <b-form-checkbox class="custom-control-info mb-2" value="info">Info</b-form-checkbox>
                  <b-form-checkbox class="custom-control-warning mb-2" value="warning">Warning</b-form-checkbox>
                  <b-form-checkbox class="custom-control-danger mb-2" value="danger">Danger</b-form-checkbox>
                  <b-form-checkbox class="custom-control-light mb-2" value="light">Light</b-form-checkbox>
                  <b-form-checkbox class="custom-control-dark mb-2" value="dark">Dark</b-form-checkbox>
                </b-form-checkbox-group>
              </b-col>
              <b-col cols="6">
                <b-form-checkbox-group v-model="checkboxesThemed" stacked>
                  <b-form-checkbox class="custom-control-primary mb-2" value="primary">Primary</b-form-checkbox>
                  <b-form-checkbox class="custom-control-success mb-2" value="success">Success</b-form-checkbox>
                  <b-form-checkbox class="custom-control-info mb-2" value="info">Info</b-form-checkbox>
                  <b-form-checkbox class="custom-control-warning mb-2" value="warning">Warning</b-form-checkbox>
                  <b-form-checkbox class="custom-control-danger mb-2" value="danger">Danger</b-form-checkbox>
                  <b-form-checkbox class="custom-control-light mb-2" value="light">Light</b-form-checkbox>
                  <b-form-checkbox class="custom-control-dark mb-2" value="dark">Dark</b-form-checkbox>
                </b-form-checkbox-group>
              </b-col>
            </b-row>
            <label>Large Size</label>
            <b-row class="push">
              <b-col cols="6">
                <b-form-checkbox-group stacked>
                  <b-form-checkbox class="custom-control-lg custom-control-primary mb-2" value="primary">Primary</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-success mb-2" value="success">Success</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-info mb-2" value="info">Info</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-warning mb-2" value="warning">Warning</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-danger mb-2" value="danger">Danger</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-light mb-2" value="light">Light</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-dark mb-2" value="dark">Dark</b-form-checkbox>
                </b-form-checkbox-group>
              </b-col>
              <b-col cols="6">
                <b-form-checkbox-group v-model="checkboxesThemedLarge" stacked>
                  <b-form-checkbox class="custom-control-lg custom-control-primary mb-2" value="primary">Primary</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-success mb-2" value="success">Success</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-info mb-2" value="info">Info</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-warning mb-2" value="warning">Warning</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-danger mb-2" value="danger">Danger</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-light mb-2" value="light">Light</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-dark mb-2" value="dark">Dark</b-form-checkbox>
                </b-form-checkbox-group>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <!-- END Themed -->

        <!-- Shapes -->
        <h2 class="content-heading border-bottom mb-4 pb-2">Shapes</h2>
        <b-row class="push">
          <b-col lg="4">
            <p class="font-size-sm text-muted">
              You can easily use a different shape for your checkboxes
            </p>
          </b-col>
          <b-col lg="8" xl="5">
            <label>Default Size</label>
            <b-row class="push">
              <b-col cols="6">
                <b-form-checkbox-group v-model="checkboxesShapesSquare" stacked>
                  <b-form-checkbox class="custom-control-primary custom-checkbox-square mb-2" value="s1">Square 1</b-form-checkbox>
                  <b-form-checkbox class="custom-control-success custom-checkbox-square mb-2" value="s2">Square 2</b-form-checkbox>
                  <b-form-checkbox class="custom-control-warning custom-checkbox-square mb-2" value="s3">Square 3</b-form-checkbox>
                </b-form-checkbox-group>
              </b-col>
              <b-col cols="6">
                <b-form-checkbox-group v-model="checkboxesShapesCircle" stacked>
                  <b-form-checkbox class="custom-control-primary custom-checkbox-rounded-circle mb-2" value="c1">Circle 1</b-form-checkbox>
                  <b-form-checkbox class="custom-control-success custom-checkbox-rounded-circle mb-2" value="c2">Circle 2</b-form-checkbox>
                  <b-form-checkbox class="custom-control-warning custom-checkbox-rounded-circle mb-2" value="c3">Circle 3</b-form-checkbox>
                </b-form-checkbox-group>
              </b-col>
            </b-row>
            <label>Large Size</label>
            <b-row class="push">
              <b-col cols="6">
                <b-form-checkbox-group stacked>
                  <b-form-checkbox class="custom-control-lg custom-control-danger custom-checkbox-square mb-2" value="s1">Square 1</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-info custom-checkbox-square mb-2" value="s2">Square 2</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-dark custom-checkbox-square mb-2" value="s3">Square 3</b-form-checkbox>
                </b-form-checkbox-group>
              </b-col>
              <b-col cols="6">
                <b-form-checkbox-group stacked>
                  <b-form-checkbox class="custom-control-lg custom-control-danger custom-checkbox-rounded-circle mb-2" value="c1">Circle 1</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-info custom-checkbox-rounded-circle mb-2" value="c2">Circle 2</b-form-checkbox>
                  <b-form-checkbox class="custom-control-lg custom-control-dark custom-checkbox-rounded-circle mb-2" value="c3">Circle 3</b-form-checkbox>
                </b-form-checkbox-group>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <!-- END Themed -->
      </base-block>
      <!-- END Checkboxes -->

      <!-- Radios -->
      <base-block rounded title="Radios">
        <!-- Based on Bootstrap -->
        <h2 class="content-heading border-bottom mb-4 pb-2">Based on Bootstrap</h2>
        <b-row class="push">
          <b-col lg="4">
            <p class="font-size-sm text-muted">
              These are the default Bootstrap custom radios
            </p>
          </b-col>
          <b-col lg="8" xl="5">
            <b-form-group label="Switches" label-class="font-w600">
              <b-form-radio-group v-model="radios" stacked>
                <b-form-radio class="mb-1" value="1">Option 1</b-form-radio>
                <b-form-radio class="mb-1" value="2">Option 2</b-form-radio>
                <b-form-radio class="mb-1" value="3">Option 3</b-form-radio>
              </b-form-radio-group>
            </b-form-group>
            <b-form-group label="Inline Switches" label-class="font-w600">
              <b-form-radio-group v-model="radios">
                <b-form-radio class="mb-1" value="1">Option 1</b-form-radio>
                <b-form-radio class="mb-1" value="2">Option 2</b-form-radio>
                <b-form-radio class="mb-1" value="3">Option 3</b-form-radio>
              </b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
        <!-- END Based on Bootstrap -->

        <!-- Large Size -->
        <h2 class="content-heading border-bottom mb-4 pb-2">Large Size</h2>
        <b-row class="push">
          <b-col lg="4">
            <p class="font-size-sm text-muted">
              You can use bigger controls if you like
            </p>
          </b-col>
          <b-col lg="8" xl="5">
            <b-form-group label="Switches" label-class="font-w600">
              <b-form-radio-group v-model="radios" stacked>
                <b-form-radio class="custom-control-lg mb-1" value="1">Option 1</b-form-radio>
                <b-form-radio class="custom-control-lg mb-1" value="2">Option 2</b-form-radio>
                <b-form-radio class="custom-control-lg mb-1" value="3">Option 3</b-form-radio>
              </b-form-radio-group>
            </b-form-group>
            <b-form-group label="Inline Switches" label-class="font-w600">
              <b-form-radio-group v-model="radios">
                <b-form-radio class="custom-control-lg mb-1" value="1">Option 1</b-form-radio>
                <b-form-radio class="custom-control-lg mb-1" value="2">Option 2</b-form-radio>
                <b-form-radio class="custom-control-lg mb-1" value="3">Option 3</b-form-radio>
              </b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
        <!-- END Large Size -->

        <!-- Themed -->
        <h2 class="content-heading border-bottom mb-4 pb-2">Themed</h2>
        <b-row class="push">
          <b-col lg="4">
            <p class="font-size-sm text-muted">
              You can easily use various colors for your custom radios
            </p>
          </b-col>
          <b-col lg="8" xl="5">
            <label>Default Size</label>
            <b-row class="push">
              <b-col cols="6">
                <b-form-radio-group class="push" v-model="radiosThemed" stacked>
                  <b-form-radio class="custom-control-primary mb-1" value="1">Primary 1</b-form-radio>
                  <b-form-radio class="custom-control-primary mb-1" value="2">Primary 2</b-form-radio>
                </b-form-radio-group>
                <b-form-radio-group class="push" v-model="radiosThemed" stacked>
                  <b-form-radio class="custom-control-info mb-1" value="1">Info 1</b-form-radio>
                  <b-form-radio class="custom-control-info mb-1" value="2">Info 2</b-form-radio>
                </b-form-radio-group>
                <b-form-radio-group class="push" v-model="radiosThemed" stacked>
                  <b-form-radio class="custom-control-danger mb-1" value="1">Danger 1</b-form-radio>
                  <b-form-radio class="custom-control-danger mb-1" value="2">Danger 2</b-form-radio>
                </b-form-radio-group>
                <b-form-radio-group class="push" v-model="radiosThemed" stacked>
                  <b-form-radio class="custom-control-dark mb-1" value="1">Dark 1</b-form-radio>
                  <b-form-radio class="custom-control-dark mb-1" value="2">Dark 2</b-form-radio>
                </b-form-radio-group>
              </b-col>
              <b-col cols="6">
                <b-form-radio-group class="push" v-model="radiosThemed" stacked>
                  <b-form-radio class="custom-control-success mb-1" value="1">Success 1</b-form-radio>
                  <b-form-radio class="custom-control-success mb-1" value="2">Success 2</b-form-radio>
                </b-form-radio-group>
                <b-form-radio-group class="push" v-model="radiosThemed" stacked>
                  <b-form-radio class="custom-control-warning mb-1" value="1">Warning 1</b-form-radio>
                  <b-form-radio class="custom-control-warning mb-1" value="2">Warning 2</b-form-radio>
                </b-form-radio-group>
                <b-form-radio-group class="push" v-model="radiosThemed" stacked>
                  <b-form-radio class="custom-control-light mb-1" value="1">Light 1</b-form-radio>
                  <b-form-radio class="custom-control-light mb-1" value="2">Light 2</b-form-radio>
                </b-form-radio-group>
              </b-col>
            </b-row>
            <label>Large Size</label>
            <b-row class="push">
              <b-col cols="6">
                <b-form-radio-group class="push" v-model="radiosThemed" stacked>
                  <b-form-radio class="custom-control-lg custom-control-primary mb-1" value="1">Primary 1</b-form-radio>
                  <b-form-radio class="custom-control-lg custom-control-primary mb-1" value="2">Primary 2</b-form-radio>
                </b-form-radio-group>
                <b-form-radio-group class="push" v-model="radiosThemed" stacked>
                  <b-form-radio class="custom-control-lg custom-control-info mb-1" value="1">Info 1</b-form-radio>
                  <b-form-radio class="custom-control-lg custom-control-info mb-1" value="2">Info 2</b-form-radio>
                </b-form-radio-group>
                <b-form-radio-group class="push" v-model="radiosThemed" stacked>
                  <b-form-radio class="custom-control-lg custom-control-danger mb-1" value="1">Danger 1</b-form-radio>
                  <b-form-radio class="custom-control-lg custom-control-danger mb-1" value="2">Danger 2</b-form-radio>
                </b-form-radio-group>
                <b-form-radio-group class="push" v-model="radiosThemed" stacked>
                  <b-form-radio class="custom-control-lg custom-control-dark mb-1" value="1">Dark 1</b-form-radio>
                  <b-form-radio class="custom-control-lg custom-control-dark mb-1" value="2">Dark 2</b-form-radio>
                </b-form-radio-group>
              </b-col>
              <b-col cols="6">
                <b-form-radio-group class="push" v-model="radiosThemed" stacked>
                  <b-form-radio class="custom-control-lg custom-control-success mb-1" value="1">Success 1</b-form-radio>
                  <b-form-radio class="custom-control-lg custom-control-success mb-1" value="2">Success 2</b-form-radio>
                </b-form-radio-group>
                <b-form-radio-group class="push" v-model="radiosThemed" stacked>
                  <b-form-radio class="custom-control-lg custom-control-warning mb-1" value="1">Warning 1</b-form-radio>
                  <b-form-radio class="custom-control-lg custom-control-warning mb-1" value="2">Warning 2</b-form-radio>
                </b-form-radio-group>
                <b-form-radio-group class="push" v-model="radiosThemed" stacked>
                  <b-form-radio class="custom-control-lg custom-control-light mb-1" value="1">Light 1</b-form-radio>
                  <b-form-radio class="custom-control-lg custom-control-light mb-1" value="2">Light 2</b-form-radio>
                </b-form-radio-group>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <!-- END Themed -->
      </base-block>
      <!-- END Radios -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      switches: [1],
      switchesThemed: ['primary', 'success', 'info', 'warning', 'danger', 'light', 'dark'],
      switchesThemedLarge: ['primary', 'success', 'info', 'warning', 'danger', 'light', 'dark'],
      checkboxes: [1],
      checkboxesThemed: ['primary', 'success', 'info', 'warning', 'danger', 'light', 'dark'],
      checkboxesThemedLarge: ['primary', 'success', 'info', 'warning', 'danger', 'light', 'dark'],
      checkboxesShapesSquare: ['s1', 's2', 's3'],
      checkboxesShapesCircle: ['c1', 'c2', 'c3'],
      radios: 1,
      radiosThemed: 1
    }
  }
}
</script>
