import React from "react";

import { View } from "react-native";

import { styles } from "./styles";

import { Button } from "../Button";
import { COLORS } from "../../theme";
import { useAuth } from "../../hooks/auth";

export function SignInBox() {
  const { signIn, isSigningIn } = useAuth();

  return (
    <View style={styles.container}>
      <Button
        onPress={signIn}
        title="ENTRAR COM O GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        isLoading={isSigningIn}
      />
    </View>
  );
}
