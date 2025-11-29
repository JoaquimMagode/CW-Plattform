import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';
import { CVData } from '../../lib/types';
import { Translations } from '../../lib/translations';



const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
    },
    leftColumn: {
        width: '40%',
        backgroundColor: '#1a1a1a',
        color: '#FFFFFF',
        padding: 30,
        height: '100%',
    },
    rightColumn: {
        width: '60%',
        padding: 30,
    },
    photo: {
        width: 150,
        height: 150,
        borderRadius: 10,
        marginBottom: 30,
        objectFit: 'cover',
    },
    name: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 32,
        color: '#1a1a1a',
        marginBottom: 5,
        textTransform: 'uppercase',
    },
    title: {
        fontSize: 14,
        color: '#6d54b0',
        marginBottom: 30,
        textTransform: 'uppercase',
        letterSpacing: 2,
        fontWeight: 'bold',
    },
    sectionTitleLeft: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 14,
        color: '#FFFFFF',
        marginBottom: 15,
        marginTop: 20,
        textTransform: 'uppercase',
        letterSpacing: 1,
        borderBottom: '1px solid #6d54b0',
        paddingBottom: 5,
    },
    sectionTitleRight: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 16,
        color: '#1a1a1a',
        marginBottom: 20,
        marginTop: 10,
        textTransform: 'uppercase',
        letterSpacing: 1,
        borderBottom: '2px solid #6d54b0',
        paddingBottom: 5,
    },
    contactItem: {
        marginBottom: 10,
    },
    contactLabel: {
        fontSize: 8,
        color: '#888',
        marginBottom: 2,
        textTransform: 'uppercase',
    },
    contactValue: {
        fontSize: 10,
        color: '#FFF',
    },
    skillItem: {
        marginBottom: 8,
    },
    skillName: {
        fontSize: 10,
        color: '#FFF',
        marginBottom: 2,
    },
    skillBar: {
        height: 3,
        backgroundColor: '#333',
        borderRadius: 1,
    },
    skillFill: {
        height: '100%',
        backgroundColor: '#6d54b0',
        borderRadius: 1,
        width: '80%', // Static width for visual
    },
    experienceItem: {
        marginBottom: 20,
    },
    position: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#1a1a1a',
    },
    company: {
        fontSize: 11,
        color: '#6d54b0',
        marginBottom: 2,
    },
    date: {
        fontSize: 10,
        color: '#666',
        marginBottom: 5,
    },
    description: {
        fontSize: 10,
        color: '#444',
        lineHeight: 1.5,
    },
});

interface Props {
    data: CVData;
    t: any;
}

const BoldTemplate: React.FC<Props> = ({ data, t }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.leftColumn}>
                    {data.personal.photo && (
                        <Image src={data.personal.photo} style={styles.photo} />
                    )}

                    <View>
                        <Text style={styles.sectionTitleLeft}>{t.contact}</Text>
                        <View style={styles.contactItem}>
                            <Text style={styles.contactLabel}>{t.steps?.personal?.email || 'Email'}</Text>
                            <Text style={styles.contactValue}>{data.personal.email}</Text>
                        </View>
                        <View style={styles.contactItem}>
                            <Text style={styles.contactLabel}>{t.steps?.personal?.phone || 'Phone'}</Text>
                            <Text style={styles.contactValue}>{data.personal.phone}</Text>
                        </View>
                        <View style={styles.contactItem}>
                            <Text style={styles.contactLabel}>{t.steps?.personal?.address || 'Address'}</Text>
                            <Text style={styles.contactValue}>{data.personal.address}</Text>
                            <Text style={styles.contactValue}>{data.personal.city}, {data.personal.country}</Text>
                        </View>
                    </View>

                    {data.skills.length > 0 && (
                        <View>
                            <Text style={styles.sectionTitleLeft}>{t.skills}</Text>
                            {data.skills.map((skill, index) => (
                                <View key={index} style={styles.skillItem}>
                                    <Text style={styles.skillName}>{skill}</Text>
                                    <View style={styles.skillBar}>
                                        <View style={styles.skillFill} />
                                    </View>
                                </View>
                            ))}
                        </View>
                    )}

                    {data.languages.length > 0 && (
                        <View>
                            <Text style={styles.sectionTitleLeft}>{t.languages}</Text>
                            {data.languages.map((lang, index) => (
                                <View key={index} style={styles.contactItem}>
                                    <Text style={styles.contactValue}>{lang.language}</Text>
                                    <Text style={styles.contactLabel}>{lang.proficiency}</Text>
                                </View>
                            ))}
                        </View>
                    )}
                </View>

                <View style={styles.rightColumn}>
                    <Text style={styles.name}>{data.personal.fullName}</Text>
                    <Text style={styles.title}>{data.personal.title}</Text>

                    {data.summary && (
                        <View>
                            <Text style={styles.sectionTitleRight}>{t.summary}</Text>
                            <Text style={styles.description}>{data.summary}</Text>
                        </View>
                    )}

                    {data.experience.length > 0 && (
                        <View>
                            <Text style={styles.sectionTitleRight}>{t.experience}</Text>
                            {data.experience.map((exp, index) => (
                                <View key={index} style={styles.experienceItem}>
                                    <Text style={styles.position}>{exp.position}</Text>
                                    <Text style={styles.company}>{exp.company} | {exp.location}</Text>
                                    <Text style={styles.date}>{exp.startDate} - {exp.current ? t.present : exp.endDate}</Text>
                                    <Text style={styles.description}>{exp.description}</Text>
                                </View>
                            ))}
                        </View>
                    )}

                    {data.education.length > 0 && (
                        <View>
                            <Text style={styles.sectionTitleRight}>{t.education}</Text>
                            {data.education.map((edu, index) => (
                                <View key={index} style={styles.experienceItem}>
                                    <Text style={styles.position}>{edu.degree}</Text>
                                    <Text style={styles.company}>{edu.school} | {edu.location}</Text>
                                    <Text style={styles.date}>{edu.startDate} - {edu.endDate}</Text>
                                    <Text style={styles.description}>{edu.description}</Text>
                                </View>
                            ))}
                        </View>
                    )}
                </View>
            </Page>
        </Document>
    );
};

export default BoldTemplate;
