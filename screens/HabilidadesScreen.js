import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function HabilidadesScreen() {
    const habilidades = ['React', 'React Native', 'JavaScript', 'HTML', 'CSS', 'Node.js'];

    return (
        <View style={styles.container}>
            <FlatList
                data={habilidades}
                keyExtractor={(item) => item}
                renderItem={({ item }) => <Text style={styles.item}>• {item}</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF5F8',
        padding: 20,
    },

    item: {
        fontSize: 18,
        backgroundColor: '#FFFFFF',
        padding: 15,
        marginBottom: 12,
        borderRadius: 15,
        color: '#D87093',
        fontWeight: '600',
    },
});
