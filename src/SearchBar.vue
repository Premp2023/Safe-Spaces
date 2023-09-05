<template>
  <div class="user-dashboard-container1">
    <div class="user-dashboard-navbar">
      <div class="user-dashboard-search">
        <img
          src="./assets/img/search.svg"
          alt="search9659"
          class="user-dashboard-search1"
        />
        <span class="user-dashboard-text12 LightBasicTypographyParagraph">
          <span>Search (Ctrl+/)</span>
        </span>
      </div>
      <div class="user-dashboard-action">
        <div class="user-dashboard-notification">
          <img
            src="./assets/img/bell.svg"
            alt="bell9659"
            class="user-dashboard-bell"
          />
          <div class="user-dashboard-dot">
            <img
              src="./assets/img/Background.svg"
              alt="Background9659"
              class="user-dashboard-background"
            />
            <span
              class="user-dashboard-text14 LightBasicTypographyParagraphSmallSemiBold"
            >
              4
            </span>
          </div>
        </div>
        <div class="user-dashboard-avatar">
          <div class="user-dashboard-avatar1">
            <div class="user-dashboard-background1">
              <img
                src
                alt="BackgroundI965"
                class="user-dashboard-background2"
              />
              <img src alt="OverlayI965" class="user-dashboard-overlay" />
            </div>
            <img
              src="./assets/img/Avatar.svg"
              alt="AvatarI965"
              class="user-dashboard-avatar2"
            />
          </div>
          <img
            src="./assets/img/Status.png"
            alt="Status9659"
            class="user-dashboard-status"
          />
        </div>
      </div>
    </div>
    <div class="user-dashboard-body">
      <span class="user-dashboard-text15 LightBasicTypographyH4Heading">
        <span>User Dashboard</span>
      </span>
      <div class="user-dashboard-congratulations">
        <div class="user-dashboard-body1">
          <div class="user-dashboard-list4">
            <div class="user-dashboard-text17">
              <span class="user-dashboard-text18 LightBasicTypographyH5Heading">
                <span>Report a new complaint</span>
              </span>
            </div>
            <div class="user-dashboard-text20">
              <button class="user-dashboard-button user-dashboard-button1">
                <!-- <button class="user-dashboard-button1"> -->
                <span class="user-dashboard-text21 LightButton2 ButtonDefault">
                  <span>Report</span>
                </span>
                <!-- </button> -->
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.user-dashboard-container1 {
  gap: 26px;
  display: flex;
  padding: 16px 0 0;
  flex-grow: 1;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.user-dashboard-navbar {
  gap: 10px;
  display: flex;
  padding: 12px 45px;
  overflow: hidden;
  align-self: stretch;
  box-shadow: 0px 2px 4px 0px rgba(165, 163, 174, 0.30000001192092896) ;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 6px;
  justify-content: center;
  background-color: var(--white);
}
.user-dashboard-search {
  gap: 10px;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  width: 100%;
  height: 26px;
}
.user-dashboard-search1 {
  width: 26px;
  height: 26px;
}
.user-dashboard-text12 {
  color: var(--disable-text);
  height: auto;
  flex-grow: 1;
  text-align: left;
  line-height: 22px;
}
.user-dashboard-action {
  gap: 16px;
  display: flex;
  align-items: center;
}
.user-dashboard-notification {
  gap: -11px;
  width: 27.559221267700195px;
  height: 37px;
  display: flex;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
}
.user-dashboard-bell {
  top: 5.5px;
  left: 0px;
  width: 26px;
  height: 26px;
  position: absolute;
}
.user-dashboard-dot {
  top: 1.76165771484375px;
  left: 14.22991943359375px;
  width: 18px;
  height: 18px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.user-dashboard-background {
  top: 0px;
  left: 0px;
  width: 18px;
  height: 18px;
  position: absolute;
}
.user-dashboard-text14 {
  top: 1.73834228515625px;
  left: 5.77008056640625px;
  color: var(--dl-color-light_solidcolor_extra-white);
  width: 5px;
  height: auto;
  position: absolute;
  text-align: center;
  line-height: 14px;
  font-size: 11px;
}
.user-dashboard-avatar {
  width: 38px;
  height: 38px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.user-dashboard-avatar1 {
  top: -0.5px;
  left: 0px;
  width: 38px;
  height: 38px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 100px;
}
.user-dashboard-background1 {
  top: 0px;
  left: 0px;
  width: 37.99999237060547px;
  height: 38px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.user-dashboard-background2 {
  top: 0px;
  left: 0.00000762939453125px;
  width: 38px;
  height: 38px;
  position: absolute;
}
.user-dashboard-overlay {
  top: 3.694448471069336px;
  left: 3.694443941116333px;
  width: 31px;
  height: 31px;
  position: absolute;
  border-radius: 100px;
}
.user-dashboard-avatar2 {
  top: 0.000003814697265625px;
  left: 0px;
  width: 38px;
  height: 38px;
  position: absolute;
}
.user-dashboard-status {
  top: 22.739691px;
  left: 23.762005px;
  width: 15px;
  height: 15px;
  position: absolute;
  box-sizing: content-box;
  border: none;
}
.user-dashboard-body {
  gap: 26px;
  display: flex;
  flex-grow: 1;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--secondary);
}
.user-dashboard-text15 {
  color: var(--dl-color-light_typographycolor-headingtext);
  height: auto;
  align-self: stretch;
  text-align: left;
  line-height: 30px;
  font-weight: 600;
  font-size: 22px;
  font-style: normal;
  color: var(--text-heading);
}
.user-dashboard-congratulations {
  display: flex;
  box-shadow: 0px 4px 18px 0px rgba(75, 70, 92, 0.10000000149011612) ;
  align-items: flex-start;
  border-radius: 6px;
  flex-direction: column;
  background-color: var(--dl-color-light_solidcolor_extra-cardbackground);
}
.user-dashboard-body1 {
  gap: 18px;
  width: 359px;
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
}
.user-dashboard-body1 {
  gap: 15px;
  width: 290px;
  display: flex;
  padding: 20px;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  background-color: var(--white);
}
.user-dashboard-text17 {
  gap: 2px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.user-dashboard-text18 {
  color: var(--dl-color-light_typographycolor-headingtext);
  height: auto;
  text-align: left;
  line-height: 24px;
  font-size: 18px;
  font-weight: 600;
  font-style: normal;
  color: var(--text-heading);
  padding-bottom: 10px;
}
.user-dashboard-text20 {
  gap: 3px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.user-dashboard-button {
  display: flex;
  box-shadow: 0px 2px 4px 0px rgba(165, 163, 174, 0.30000001192092896) ;
  align-items: center;
  border-radius: 20px;
  justify-content: center;
  background-color: rgba(24, 91, 106, 0.699999988079071);
  border: none;
  color: var(--white);
}
.user-dashboard-button1 {
  gap: 12px;
  display: flex;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
}
.user-dashboard-text21 {
  color: var(--dl-color-light_solidcolor_extra-white);
  height: auto;
  text-align: left;
  line-height: normal;
}
.user-dashboard-footer {
  gap: 10px;
  display: flex;
  padding: 12px 0;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-end;
  flex-shrink: 0;
  border-radius: 6px;
  justify-content: flex-end;
}
.user-dashboard-search2 {
  gap: 16px;
  display: flex;
  align-self: stretch;
  align-items: center;
  justify-content: flex-end;
}
.user-dashboard-text23 {
  color: var(--dl-color-light_typographycolor-bodytext);
  height: auto;
  text-align: right;
  line-height: 22px;
}
.user-dashboard-text25 {
  color: var(--dl-color-light_typographycolor-bodytext);
  height: auto;
  text-align: right;
  line-height: 22px;
}
.user-dashboard-text27 {
  color: var(--dl-color-light_typographycolor-bodytext);
  height: auto;
  text-align: right;
  line-height: 22px;
}
.user-dashboard-text29 {
  color: var(--dl-color-light_typographycolor-bodytext);
  height: auto;
  text-align: right;
  line-height: 22px;
}
</style>
