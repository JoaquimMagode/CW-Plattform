import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { CVData } from '../../lib/types';
import { Translations } from '../../lib/translations';



const styles = StyleSheet.create({
    page: {
        padding: 50,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Helvetica',
    },
    header: {
        marginBottom: 30,
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
    },
    title: {
        fontSize: 14,
        color: '#666',
        marginBottom: 15,
    },
    contact: {
        fontSize: 10,
        color: '#666',
        lineHeight: 1.5,
    },
    section: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#000',
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 10,
    },
    item: {
        marginBottom: 15,
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
    },
    position: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#000',
    },
    company: {
        fontSize: 11,
        color: '#444',
    },
    date: {
        fontSize: 10,
        color: '#888',
    },
    description: {
        fontSize: 10,
        color: '#444',
        lineHeight: 1.5,
        marginTop: 3,
    },
    skills: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    skill: {
        fontSize: 10,
        color: '#444',
    },
});

interface Props {
    data: CVData;
    t: any;
}

const MinimalTemplate: React.FC<Props> = ({ data, t }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.name}>{data.personal.fullName}</Text>
                    <Text style={styles.title}>{data.personal.title}</Text>
                    <View>
                        <Text style={styles.contact}>{data.personal.email} • {data.personal.phone}</Text>
                        <Text style={styles.contact}>{data.personal.address}, {data.personal.city}, {data.personal.country}</Text>
                    </View>
                </View>

                {data.summary && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{t.summary}</Text>
                        <Text style={styles.description}>{data.summary}</Text>
                    </View>
                )}

                {data.experience.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{t.experience}</Text>
                        {data.experience.map((exp, index) => (
                            <View key={index} style={styles.item}>
                                <View style={styles.itemHeader}>
                                    <Text style={styles.position}>{exp.position}</Text>
                                    <Text style={styles.date}>{exp.startDate} - {exp.current ? t.present : exp.endDate}</Text>
                                </View>
                                <Text style={styles.company}>{exp.company}, {exp.location}</Text>
                                <Text style={styles.description}>{exp.description}</Text>
                            </View>
                        ))}
                    </View>
                )}

                {data.education.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{t.education}</Text>
                        {data.education.map((edu, index) => (
                            <View key={index} style={styles.item}>
                                <View style={styles.itemHeader}>
                                    <Text style={styles.position}>{edu.degree}</Text>
                                    <Text style={styles.date}>{edu.startDate} - {edu.endDate}</Text>
                                </View>
                                <Text style={styles.company}>{edu.school}, {edu.location}</Text>
                                <Text style={styles.description}>{edu.description}</Text>
                            </View>
                        ))}
                    </View>
                )}

                {data.skills.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{t.skills}</Text>
                        <View style={styles.skills}>
                            {data.skills.map((skill, index) => (
                                <Text key={index} style={styles.skill}>
                                    {skill}{index < data.skills.length - 1 ? ' • ' : ''}
                                </Text>
                            ))}
                        </View>
                    </View>
                )}
            </Page>
        </Document>
    );
};

export default MinimalTemplate;
