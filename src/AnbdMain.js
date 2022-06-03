import {
  View,
  ViewBox,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
  Dimensions,
  StatusBar,
} from "react-native";
import Constants from "expo-constants";

import BellIcon from "../assets/bell.svg";
import WriteIcon from "../assets/write.svg";
import SettingIcon from "../assets/setting.svg";
import Tag1Icon from "../assets/tag1.svg";
import Tag2Icon from "../assets/tag2.svg";
import Tag3Icon from "../assets/tag3.svg";
import Tag4Icon from "../assets/tag4.svg";
import Tag5Icon from "../assets/tag5.svg";
import Tag6Icon from "../assets/tag6.svg";
import SearchIcon from "../assets/search.svg";
import HeartIcon from "../assets/heart.svg";
import CommentIcon from "../assets/comment.svg";
import AnbdIcon from "../assets/anbd.svg";
import ChatIcon from "../assets/chat.svg";
import IncogIcon from "../assets/incog.svg";
import KarmaIcon from "../assets/karma.svg";
import UserIcon from "../assets/user.svg";

const SCREEN_HEIGHT = Dimensions.get("screen").height; // device height
const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;
const WINDOW_HEIGHT = Dimensions.get("window").height;

export default function AnbdMain() {
  return (
    <View>
      {/* Header */}
      <View style={styles.headerBox}>
        <Text style={styles.headerText}>아나바다</Text>
        <View style={styles.headerIconGroup}>
          <BellIcon width={19.15} height={22.8} />
          <WriteIcon
            width={21.63}
            height={22}
            fill={"#000"}
            style={{ marginRight: 10 }}
          />
        </View>
      </View>
      {/* Main content */}
      <ScrollView
      // style={{ height: `${SCREEN_HEIGHT - (STATUS_BAR_HEIGHT + 55)}` }}
      >
        <View style={styles.tagGroup}>
          <View style={styles.tagSpacer}>
            <SettingIcon width={24} height={24} />
          </View>
          <View style={styles.tagSpacer}>
            <Tag1Icon width={50.18} height={24} />
          </View>
          <View style={styles.tagSpacer}>
            <Tag2Icon width={50.18} height={24} />
          </View>
          <View style={styles.tagSpacer}>
            <Tag3Icon width={61.09} height={24} />
          </View>
          <View style={styles.tagSpacer}>
            <Tag4Icon width={50.18} height={24} />
          </View>
          <View style={styles.tagSpacer}>
            <Tag5Icon width={50.18} height={24} />
          </View>
          <View style={styles.tagSpacer}>
            <Tag6Icon width={61.09} height={24} />
          </View>
        </View>

        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchText}
            editable={false}
            placeholder="나에게 필요한 것을 검색해보세요"
          />
          <View style={styles.searchIconBox}>
            <SearchIcon width={20} height={20} fill="#4a4a4a" />
          </View>
        </View>

        <View style={styles.postBox}>
          <Text numberOfLines={3} style={styles.postText}>
            테스트입니다
            ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㄱ허갸ㅐ허ㅑㅐ걷해ㅑ개쟈ㅗ해족대ㅗㅑㅐㅑ개ㅑㅓㅓㅑㅑㅑ댜ㅓㅑㅜㅑㅜㅑㅑㅜㅑㅜㅑㅜㅑㅜㅑㅜㅑㅑㅜ
          </Text>
          <View style={styles.postBottomGroup}>
            <View style={styles.postBottomTextGroup}>
              <Text style={styles.postBottomText}>2일 전, 사용자</Text>
            </View>
            <View style={styles.postBottomIconGroup}>
              <View style={styles.postBottomIconGroupSmall}>
                <CommentIcon width={18} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>

              <View style={styles.postBottomIconGroupSmall}>
                <HeartIcon width={20} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.postBox}>
          <Text numberOfLines={3} style={styles.postText}>
            테스트입니다
            ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㄱ허갸ㅐ허ㅑㅐ걷해ㅑ개쟈ㅗ해족대ㅗㅑㅐㅑ개ㅑㅓㅓㅑㅑㅑ댜ㅓㅑㅜㅑㅜㅑㅑㅜㅑㅜㅑㅜㅑㅜㅑㅜㅑㅑㅜ
          </Text>
          <View style={styles.postBottomGroup}>
            <View style={styles.postBottomTextGroup}>
              <Text style={styles.postBottomText}>2일 전, 사용자</Text>
            </View>
            <View style={styles.postBottomIconGroup}>
              <View style={styles.postBottomIconGroupSmall}>
                <CommentIcon width={18} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>

              <View style={styles.postBottomIconGroupSmall}>
                <HeartIcon width={20} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.postBox}>
          <Text numberOfLines={3} style={styles.postText}>
            테스트입니다
            ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㄱ허갸ㅐ허ㅑㅐ걷해ㅑ개쟈ㅗ해족대ㅗㅑㅐㅑ개ㅑㅓㅓㅑㅑㅑ댜ㅓㅑㅜㅑㅜㅑㅑㅜㅑㅜㅑㅜㅑㅜㅑㅜㅑㅑㅜ
          </Text>
          <View style={styles.postBottomGroup}>
            <View style={styles.postBottomTextGroup}>
              <Text style={styles.postBottomText}>2일 전, 사용자</Text>
            </View>
            <View style={styles.postBottomIconGroup}>
              <View style={styles.postBottomIconGroupSmall}>
                <CommentIcon width={18} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>

              <View style={styles.postBottomIconGroupSmall}>
                <HeartIcon width={20} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.postBox}>
          <Text numberOfLines={3} style={styles.postText}>
            테스트입니다
            ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㄱ허갸ㅐ허ㅑㅐ걷해ㅑ개쟈ㅗ해족대ㅗㅑㅐㅑ개ㅑㅓㅓㅑㅑㅑ댜ㅓㅑㅜㅑㅜㅑㅑㅜㅑㅜㅑㅜㅑㅜㅑㅜㅑㅑㅜ
          </Text>
          <View style={styles.postBottomGroup}>
            <View style={styles.postBottomTextGroup}>
              <Text style={styles.postBottomText}>2일 전, 사용자</Text>
            </View>
            <View style={styles.postBottomIconGroup}>
              <View style={styles.postBottomIconGroupSmall}>
                <CommentIcon width={18} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>

              <View style={styles.postBottomIconGroupSmall}>
                <HeartIcon width={20} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.postBox}>
          <Text numberOfLines={3} style={styles.postText}>
            테스트입니다
            ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㄱ허갸ㅐ허ㅑㅐ걷해ㅑ개쟈ㅗ해족대ㅗㅑㅐㅑ개ㅑㅓㅓㅑㅑㅑ댜ㅓㅑㅜㅑㅜㅑㅑㅜㅑㅜㅑㅜㅑㅜㅑㅜㅑㅑㅜ
          </Text>
          <View style={styles.postBottomGroup}>
            <View style={styles.postBottomTextGroup}>
              <Text style={styles.postBottomText}>2일 전, 사용자</Text>
            </View>
            <View style={styles.postBottomIconGroup}>
              <View style={styles.postBottomIconGroupSmall}>
                <CommentIcon width={18} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>

              <View style={styles.postBottomIconGroupSmall}>
                <HeartIcon width={20} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.postBox}>
          <Text numberOfLines={3} style={styles.postText}>
            테스트입니다
            ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㄱ허갸ㅐ허ㅑㅐ걷해ㅑ개쟈ㅗ해족대ㅗㅑㅐㅑ개ㅑㅓㅓㅑㅑㅑ댜ㅓㅑㅜㅑㅜㅑㅑㅜㅑㅜㅑㅜㅑㅜㅑㅜㅑㅑㅜ
          </Text>
          <View style={styles.postBottomGroup}>
            <View style={styles.postBottomTextGroup}>
              <Text style={styles.postBottomText}>2일 전, 사용자</Text>
            </View>
            <View style={styles.postBottomIconGroup}>
              <View style={styles.postBottomIconGroupSmall}>
                <CommentIcon width={18} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>

              <View style={styles.postBottomIconGroupSmall}>
                <HeartIcon width={20} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.postBox}>
          <Text numberOfLines={3} style={styles.postText}>
            테스트입니다
            ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㄱ허갸ㅐ허ㅑㅐ걷해ㅑ개쟈ㅗ해족대ㅗㅑㅐㅑ개ㅑㅓㅓㅑㅑㅑ댜ㅓㅑㅜㅑㅜㅑㅑㅜㅑㅜㅑㅜㅑㅜㅑㅜㅑㅑㅜ
          </Text>
          <View style={styles.postBottomGroup}>
            <View style={styles.postBottomTextGroup}>
              <Text style={styles.postBottomText}>2일 전, 사용자</Text>
            </View>
            <View style={styles.postBottomIconGroup}>
              <View style={styles.postBottomIconGroupSmall}>
                <CommentIcon width={18} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>

              <View style={styles.postBottomIconGroupSmall}>
                <HeartIcon width={20} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.postBox}>
          <Text numberOfLines={3} style={styles.postText}>
            테스트입니다
            ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㄱ허갸ㅐ허ㅑㅐ걷해ㅑ개쟈ㅗ해족대ㅗㅑㅐㅑ개ㅑㅓㅓㅑㅑㅑ댜ㅓㅑㅜㅑㅜㅑㅑㅜㅑㅜㅑㅜㅑㅜㅑㅜㅑㅑㅜ
          </Text>
          <View style={styles.postBottomGroup}>
            <View style={styles.postBottomTextGroup}>
              <Text style={styles.postBottomText}>2일 전, 사용자</Text>
            </View>
            <View style={styles.postBottomIconGroup}>
              <View style={styles.postBottomIconGroupSmall}>
                <CommentIcon width={18} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>

              <View style={styles.postBottomIconGroupSmall}>
                <HeartIcon width={20} height={18} />
                <Text style={styles.postBottomItemGroupText}>99+</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* Footer */}
      <View style={styles.footerBox}>
        <View style={styles.footerIconGroup}>
          <UserIcon />
          <Text style={styles.footerText}>프로필</Text>
        </View>

        <View style={styles.footerIconGroup}>
          <IncogIcon />
          <Text style={styles.footerText}>익명질문</Text>
        </View>

        <View style={styles.footerIconGroup}>
          <KarmaIcon />
          <Text style={styles.footerText}>카르마</Text>
        </View>

        <View style={styles.footerIconGroup}>
          <AnbdIcon />
          <Text style={styles.footerText}>아나바다</Text>
        </View>

        <View style={styles.footerIconGroup}>
          <ChatIcon />
          <Text style={styles.footerText}>채팅</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollTest: {
    height: 2000,
    backgroundColor: "pink",
  },
  headerBox: {
    flexDirection: "row",
    marginTop: Constants.statusBarHeight,
    paddingLeft: 16,
    paddingRight: 16,
    height: 40,
    alignContent: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderColor: "#D9D9D9",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "700",
    textAlignVertical: "center",
  },
  headerIconGroup: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
  },

  tagGroup: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: "row",
  },
  tagSpacer: {
    marginRight: 6,
  },

  searchBox: {
    alignItems: "center",
    flexDirection: "row",
    height: 45,
    margin: 10,
    backgroundColor: "#F5F5F5",
    borderRadius: 6,
    marginTop: 0,
  },
  searchText: {
    flex: 1,
    height: 38,
    paddingLeft: 12,
    borderColor: "#000",
  },
  searchIconBox: {
    position: "relative",
    marginRight: 12,
  },
  searchIcon: {
    width: "100vw",
    alignItems: "center",
    flexDirection: "row-reverse",
    right: 23,
  },
  postBox: {
    borderTopWidth: 0.7,
    borderColor: "#D9D9D9",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  postText: {
    fontSize: 16,
    marginBottom: 10,
  },
  postBottomGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  postBottomText: {
    color: "#ACACAC",
    fontSize: 12,
  },
  postBottomIconGroup: {
    flexDirection: "row",
  },
  postBottomItemGroupText: {
    fontSize: 14,
    color: "#ACACAC",
    textAlign: "center",
    paddingLeft: 3,
    paddingBottom: 4,
  },
  postBottomIconGroupSmall: {
    flexDirection: "row",
    paddingLeft: 12,
    alignItems: "center",
  },
  postBottomTextGroup: {
    justifyContent: "center",
  },

  footerBox: {
    position: "absolute",
    left: 0,
    right: 0,
    // bottom: 135,
    top: SCREEN_HEIGHT - (STATUS_BAR_HEIGHT + 55),
    //870
    flexDirection: "row",
    // paddingLeft: 16,
    // paddingRight: 16,
    height: 55 + STATUS_BAR_HEIGHT,
    alignContent: "center",
    justifyContent: "space-around",
    borderTopWidth: 0.5,
    borderColor: "#D9D9D9",
    backgroundColor: "#fff",
    zIndex: 1000,
    marginBottom: STATUS_BAR_HEIGHT,
    paddingTop: 10,
    paddingHorizontal: 8,
  },
  footerGroup: {},
  footerIconGroup: {
    alignItems: "center",
  },
  footerText: {
    fontSize: 10,
    fontWeight: "400",
  },
});
