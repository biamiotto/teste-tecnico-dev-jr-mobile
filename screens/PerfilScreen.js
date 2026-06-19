import { View, Text, Image, StyleSheet } from 'react-native';

export default function PerfilScreen() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/perfil.jpg')} style={styles.imagem} />

            <Text style={styles.nome}>Beatriz Miotto</Text>

            <Text style={styles.cargo}>Desenvolvedora Mobile Júnior</Text>

            <Text style={styles.sobre}>
                Sou estudante de Desenvolvimento de Sistemas, apaixonada por tecnologia e
                desenvolvimento de aplicações web e mobile.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF5F8',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25,
    },

    imagem: {
        width: 170,
        height: 170,
        borderRadius: 85,
        borderWidth: 4,
        borderColor: '#FFC7D9',
        marginBottom: 20,
    },

    nome: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#D87093',
    },

    cargo: {
        fontSize: 18,
        color: '#F08BA8',
        marginTop: 8,
        marginBottom: 15,
    },

    sobre: {
        textAlign: 'center',
        fontSize: 16,
        color: '#666',
        lineHeight: 24,
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 15,
        elevation: 2,
    },
});
