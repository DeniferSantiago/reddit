// eslint-disable-next-line no-undef
jest.mock("react-native-reanimated", () =>
    require("react-native-reanimated/mock")
);
// eslint-disable-next-line no-undef
jest.mock("@react-native-community/netinfo", () =>
    require("@react-native-community/netinfo/jest/netinfo-mock")
);
