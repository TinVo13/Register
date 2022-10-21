import React from 'react'
import { StyleSheet, Text, Spinner, View, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Button, Icon } from '@rneui/base';

export default DangKy = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.zelo}>Zola</Text>
            <View style={styles.inputContainer}>
                {/* <Spinner
                    textContent={'Loading...'}
                /> */}
                <View
                >

                    <TextInput
                        placeholder="Tên đầy đủ"
                        autoFocus
                        style={styles.input}
                        leftIcon={
                            <Icon
                                name="user"
                                type="antdesign"
                                size={24}
                                color="black"
                            />
                        }
                    />
                    <TextInput
                        placeholder="Email/số điện thoại"
                        style={styles.input}
                        leftIcon={
                            <Icon
                                name="mail"
                                type="antdesign"
                                size={24}
                                color="black"
                            />
                        }
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Mật khẩu"
                        secureTextEntry={true}
                        containerStyle={styles.input}
                        leftIcon={
                            <Icon
                                name="lock"
                                type="antdesign"
                                size={24}
                                color="black"
                            />
                        }
                    />

                    <Button
                    onPress={()=>navigation.navigate('Xac nhan otp')}
                        title="Đăng ký"
                        style={styles.button}
                        buttonStyle={{
                            backgroundColor: '#0068FF',
                        }}
                    />
                </View>
                <View style={styles.registerContainer}>
                    <Text style={{ fontSize: 15 }}>Đã có tài khoản? </Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={[styles.forgotPasswordText, { color: '#0068FF' }]}>
                            Đăng nhập
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: "#0068FF",
        paddingTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    zelo: {
        textAlign: 'center',
        color: '#0068FF',
        fontWeight: 'bold',
        fontSize: 80,
        // marginTop: 80,
        // marginBottom: 30,
    },

    inputContainer: {
        width: 300,
        padding:20,
    },

    input: {
        paddingHorizontal: 0,
        padding:10,
        borderWidth:1,
        marginBottom:10,
        paddingHorizontal:10,
        borderColor:'grey',
    },

    button: {
        marginTop: 20,
        marginHorizontal: 10,
    },

    forgotPasswordText: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
});

