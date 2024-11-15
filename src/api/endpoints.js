const endpoints = {
  auth: {
    LOGIN:'login',
    REGISTER:'register',
    SETUP_PROFILE:'set-up-profile',
    FORGOT_PASSWORD:'forgot-password',
    VERIFY_OTP:'verify-otp',
    CHANGE_PASSWORD:'change-password',
    PROFESSIONAL_TITLES:'professional-titles',
  },
  bank:{
    ALL_BANKS:'bank/all',
    VERIFY_ACCOUNT:'bank/verify-account',
  },
  dashbaord:{
    ACTIVITIES:'activities',
    REBATE_EARNINGS:'rebate-earning',
    DASHBOARD_DETAILS:'dashboard-details',
  },
  referrals:{
    GET_REFERRALS:'referrals',
    GET_REFERRAL:'view-referrals',
    CREATE_REFERRAL:'add-referral',
    TEST_CATEGORIES:'category/all',
    CATEGORY_TESTS:'medical-test/view'
  },
  payment:{
    ALL_TRANSACTIONS:'all-transactions'
  },
  profile:{
    GET_PROFILE:'doctor/profile-details',
    UPDATE_PASSWORD:'doctor/password-update',
    UPDATE_ACCOUNT:'doctor/account-update',
    UPDATE_PROFILE:'doctor/profile-update',
  },
  patient:{
    MANUAL_BOOKIGN:'patient/manual-booking',
    ALl_DOCTORS:'patient/all-doctors',
    TIME_SLOTS:'patient/appointments/available-slots',
    BOOK_APPOINTMENT:'patient/book-appointment',
    INITIATE_PAYMENT:'payments/initialize',
    PATIENT_DETAILS:'patient/details',
    PATIENT_ALL_DETAILS:'patient/all-details',
    CONFIRM_DETAILS:'patient/confirm-details',
  }
};

export default endpoints;
