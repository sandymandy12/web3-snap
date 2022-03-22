// import { AuthSessionResult } from "expo-auth-session";
// import firebase from "firebase/app";
import { makeAutoObservable, reaction, runInAction } from "mobx";
// import { auth } from "../config/firebase";
import { User } from "../types/user";
import { resetStore, store } from "./store";
import { ISessionStatus } from "@walletconnect/types";

class UserStore {
  user: User | null = null;
  loading = false;

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.user,
      (user) => {
        if (user) {
          // store.postStore.loadPosts();
        }
      }
    );
  }

  reset = () => {
    this.user = null;
  };

  signInWallet = async (response: ISessionStatus) => {
    this.loading = true;

    if (response?.accounts.length) {

      // const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      // await auth.signInWithCredential(credential);
      this.user.address = response.accounts[0]
    }

    runInAction(() => {
      this.loading = false;
    });
  };

  signOut = async () => {
    // await auth.signOut();
    resetStore();
  };

  setUser = (user) => {
    if (user.connected) {
      this.user = {
        address: user.address!,
        displayName: user.displayName!,
        photoURL: user.photoURL!,
      };
    } else {
      this.user = null;
    }

    this.loading = false;
  };
}

export default UserStore;
