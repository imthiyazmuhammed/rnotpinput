import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'

import { BLACK, GRAY_BLACK, GRAY_SHADE, SECONDARY, TEXT_ERROR } from './styles/colors'
import { FONT_L, FONT_M, FONT_XL } from './styles/typography'

const HiddenInput = ({ innerRef, ...props }) => {
    return (
        <TextInput ref={innerRef} {...props} style={styles.textinput} />
    )
}

function InputSection({ children }) {
    return (
        <View style={styles.inputSection}>
            {children}
        </View>
    )
}

function InputContainer({ onPress, children, ...props }) {
    return (
        <Pressable onPress={onPress} {...props} style={styles.inputContainer}>
            {children}
        </Pressable>
    )
}

function OTPInput({ error, children, ...props }) {
    return (
        <View {...props} style={[ styles.otpInput, error && { borderWidth: 1, borderColor: TEXT_ERROR, borderRadius: 3 } ]}>
            {children}
        </View>
    )
}

function OTPText({ text = "0", ...props }) {
    return (
        <Text {...props} style={styles.otpText}>
            {text}
        </Text>
    )
}

const OTPComponent = ({ error = null, code = "", setCode, maxLength = "4" }) => {
    const inputRef = useRef(null)
    const [ pinReady, setPinReady ] = useState(false)
    // const [inputcontainerFocused, setInputContainerFocused] = useState(false)

    const codeDigitsArray = new Array(maxLength).fill(0)

    const handleOnBlur = () => { }

    useEffect(() => {
        setPinReady(code.length === maxLength);
        return () => setPinReady(false)
    }, [ code ])

    const handleOnPress = () => {
        // setInputContainerFocused(true)
        inputRef?.current?.focus()
    }
    const toCodeDigitInput = (_value, index) => {
        const emptyInputChar = " ";
        const digit = code[ index ] || emptyInputChar

        //formatting
        // const isCurrentDigit = index === code.length
        // const isLastDigit = code.length === maxLength - 1
        // const isCodeFull = code.length === maxLength

        // const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull)

        return (
            <OTPInput error={error} key={index}>
                <Pressable onPress={handleOnPress}>
                    <OTPText text={digit} />
                </Pressable>
            </OTPInput>
        )
    }

    return (
        <InputSection>
            <InputContainer onPress={handleOnPress}>
                {codeDigitsArray.map(toCodeDigitInput)}
            </InputContainer>
            <View><Text style={styles.error}>{error && error.message}</Text></View>
            <HiddenInput
                innerRef={inputRef}
                value={code}
                onChangeText={(e) => setCode(e)}
                maxLength={maxLength}
                keyboardType="number-pad"
                textContentType="OneTimeCode"
                onBlur={handleOnBlur}
            />
        </InputSection>
    )
}

export default OTPComponent

const styles = StyleSheet.create({
    textinput: {
        position: "absolute",
        width: 1,
        height: 1,
        opacity: 0
    },
    error: {
        color: SECONDARY,
        marginTop: 10,
        fontSize: FONT_M
    },
    inputSection: {
        alignItems: "center",
        marginVertical: 30
    },
    inputContainer: {
        width: '70%',
        flexDirection: "row",
        justifyContent: "space-around"
    },
    otpInput: {
        minWidth: 50,
        height: 50,
        backgroundColor: GRAY_SHADE,
        padding: 10,
        textAlign: "center",
        fontSize: FONT_XL,
        color: GRAY_BLACK
    },
    otpText: {
        fontSize: FONT_L,
        // fontFamily: "Poppins-Bold",
        textAlign: "center",
        color: BLACK
    }
})