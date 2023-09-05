<template>
  <div class="user-dashboard-container">
    <div class="user-dashboard-user-dashboard">
      <div class="user-dashboard-vertical-menu">
        <div class="user-dashboard-menu">
          <div class="user-dashboard-logo">
            <div class="user-dashboard-logo1">
              <img
                src="./assets/img/-logoLookscout.png"
                alt="LookscoutI965"
                class="user-dashboard-lookscout"
              />
              <span class="user-dashboard-text">
                <span>LOGO</span>
              </span>
            </div>
          </div>
          <div class="user-dashboard-section">
            <span class="user-dashboard-text02 LightBasicTypographyCaption">
              <span>PAGES</span>
            </span>
          </div>
          <div class="user-dashboard-dashboard">
            <div class="user-dashboard-list">
              <img
                src="./assets/img/smart-home.svg"
                alt="smarthome9659"
                class="user-dashboard-smarthome"
              />
              <span
                class="user-dashboard-text04 LightBasicTypographyParagraphSemiBold"
              >
              <router-link to="/dashboard">Dashboard</router-link>
              </span>
            </div>
            <div class="user-dashboard-list1">
              <img
                src="./assets/img/color-swatch.svg"
                alt="colorswatch9659"
                class="user-dashboard-colorswatch"
              />
              <span class="user-dashboard-text06 LightBasicTypographyParagraph">
                <router-link to="/report-details">Report Details</router-link>
              </span>
            </div>
            <div class="user-dashboard-list2">
              <img
                src="./assets/img/file.svg"
                alt="file9659"
                class="user-dashboard-file"
              />
              <span class="user-dashboard-text08 LightBasicTypographyParagraph">
                <router-link to="/subpage">Send to Subpage</router-link>
              </span>
            </div>
            <div class="user-dashboard-list3">
              <div class="user-dashboard-layoutgrid">
                <img
                  src="./assets/img/layout-grid.svg"
                  alt="Path9659"
                  class="user-dashboard-path"
                />
              </div>
              <span class="user-dashboard-text10 LightBasicTypographyParagraph">
                <span>See other complaints</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* .user-dashboard-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
} */

.user-dashboard-user-dashboard {
  width: 100%;
  height: 1080px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 1);
}

.user-dashboard-vertical-menu {
  gap: 26px;
  top: 0px;
  left: 0px;
  width: 94vw;
  height: 1080px;
  display: flex;
  padding: 0 26px 0 0;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: var(--secondary);
}
.user-dashboard-menu {
  height: 1080px;
  display: flex;
  padding: 0 0 10px;
  overflow: hidden;
  align-self: stretch;
  box-shadow: 0px 2px 4px 0px rgba(165, 163, 174, 0.30000001192092896);
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
  background-color: var(--white);
}
.user-dashboard-logo {
  gap: 10px;
  display: flex;
  padding: 20px 14px 20px 18px;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
}
.user-dashboard-logo1 {
  width: 163px;
  height: 39.06234359741211px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.user-dashboard-lookscout {
  top: 0px;
  left: 0px;
  width: 48px;
  height: 39px;
  position: absolute;
}
.user-dashboard-text {
  top: 4.038595676422119px;
  left: 65px;
  color: rgba(23, 91, 106, 1);
  width: 98px;
  height: auto;
  position: absolute;
  font-size: 32px;
  font-style: Bold;
  text-align: left;
  font-family: Montserrat;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.user-dashboard-section {
  gap: 8px;
  display: flex;
  padding: 20px 30px 6px;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-radius: 6px;
}
.user-dashboard-text02 {
  color: var(--disable-text);
  height: auto;
  text-align: left;
  line-height: 12px;
}
.user-dashboard-dashboard {
  gap: 4px;
  display: flex;
  padding: 0 14px;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.user-dashboard-list {
  gap: 8px;
  display: flex;
  padding: 9px 16px;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-radius: 6px;
  background-color: rgba(24, 91, 106, 0.800000011920929);
}
.user-dashboard-smarthome {
  width: 22px;
  height: 22px;
}
.user-dashboard-text04 {
  color: rgba(228, 250, 255, 1);
  height: auto;
  flex-grow: 1;
  text-align: left;
  line-height: 22px;
}

.user-dashboard-text04 a{
  text-decoration: none;
  color: white;
}
.user-dashboard-list1 {
  gap: 8px;
  display: flex;
  padding: 9px 16px;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-radius: 6px;
}
.user-dashboard-colorswatch {
  width: 22px;
  height: 22px;
}
.user-dashboard-text06 {
  color: rgba(24, 91, 106, 0.699999988079071);
  height: auto;
  flex-grow: 1;
  text-align: left;
  line-height: 22px;
}

.user-dashboard-text06 a, .user-dashboard-text08 a{
  text-decoration: none;
  color: rgba(24, 91, 106, 0.69999998807907);
}
.user-dashboard-list2 {
  gap: 8px;
  display: flex;
  padding: 9px 16px;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-radius: 6px;
}
.user-dashboard-file {
  width: 22px;
  height: 22px;
}
.user-dashboard-text08 {
  color: rgba(24, 91, 106, 0.699999988079071);
  height: auto;
  flex-grow: 1;
  text-align: left;
  line-height: 22px;
}
.user-dashboard-list3 {
  gap: 8px;
  display: flex;
  padding: 9px 16px;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-radius: 6px;
}
.user-dashboard-layoutgrid {
  width: 22px;
  height: 22px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.user-dashboard-path {
  top: 0px;
  left: 0px;
  width: 22px;
  height: 22px;
  position: absolute;
}
.user-dashboard-rectangle {
  top: 3.6666667461395264px;
  left: 3.6666667461395264px;
  width: 5px;
  height: 5px;
  position: absolute;
  border-color: rgba(24, 91, 106, 0.5);
  border-style: solid;
  border-width: 1.5px;
  border-radius: 1px;
}
.user-dashboard-rectangle1 {
  top: 3.6666667461395264px;
  left: 12.833333015441895px;
  width: 6px;
  height: 5px;
  position: absolute;
  border-color: rgba(24, 91, 106, 0.5);
  border-style: solid;
  border-width: 1.5px;
  border-radius: 1px;
}
.user-dashboard-rectangle2 {
  top: 12.833333015441895px;
  left: 3.6666667461395264px;
  width: 5px;
  height: 6px;
  position: absolute;
  border-color: rgba(24, 91, 106, 0.5);
  border-style: solid;
  border-width: 1.5px;
  border-radius: 1px;
}
.user-dashboard-rectangle3 {
  top: 12.833333015441895px;
  left: 12.833333015441895px;
  width: 6px;
  height: 6px;
  position: absolute;
  border-color: rgba(24, 91, 106, 0.5);
  border-style: solid;
  border-width: 1.5px;
  border-radius: 1px;
}
.user-dashboard-text10 {
  color: rgba(24, 91, 106, 0.699999988079071);
  height: auto;
  flex-grow: 1;
  text-align: left;
  line-height: 22px;
}
</style>
