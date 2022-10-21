// import {StatusBar} from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { Button } from '@rneui/base';

const CELL_COUNT = 5;
export default ConfirmOTP = ({ navigation }) => {

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <View behavior="height" style={styles.container}>
      {/* <StatusBar style="light" /> */}
      {/* <Spinner
        visible={isLoading}
        textContent={'Loading...'}
        textStyle={globalStyles.spinnerTextStyle}
      /> */}
      <SafeAreaView behavior="height" style={styles.container}>
        <Text style={styles.title}>Nhập mã OTP</Text>
        <Text style={styles.subTitle}>
          Đã gửi mã OTP đến Tin
        </Text>
        <View style={{ marginHorizontal: 20,marginTop:20 }}>
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <View
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[styles.cellRoot, isFocused && styles.focusCell]}>
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
            textInputStyle={{ borderColor: '#0068FF' }} />
        </View>


        <Text
          style={{
            marginLeft: 24,
            marginTop: 20,
            marginBottom: -12,
          }}>
        </Text>

        {/* View for resend otp  */}
        <Text style={styles.resendCodeText}>
          Gửi lại mã OTP sau 1 giây
        </Text>
        <TouchableOpacity>
          <View style={styles.resendCodeContainer}>
            <Text style={styles.resendCode}> Gửi lại mã OTP</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.button}>
          <Button
          onPress={()=>navigation.goBack()}
            title="Xác nhận"
            buttonStyle={{
              backgroundColor: "#0068FF",
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#0068FF",
    paddingTop: 16,
    // alignItems: "center",
    justifyContent: 'center',
  },

  title: {
    textAlign: 'left',
    fontSize: 20,
    marginStart: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    textAlign: 'left',
    fontSize: 16,
    marginStart: 20,
    marginTop: 10,
  },
  codeFieldRoot: {
    marginTop: 20,
    width: '90%',
    marginLeft: 20,
    marginRight: 20,
  },
  cellRoot: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  cellText: {
    color: '#000',
    fontSize: 28,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 2,
  },

  button: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  resendCode: {
    color: "#0068FF",
    marginStart: 20,
    marginTop: 20,
  },
  resendCodeText: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  resendCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
